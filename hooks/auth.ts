/* eslint-disable import/prefer-default-export */

import { useAuthStore } from '@/stores/authStore';
import { TAuthInfo } from '@/types';

export const useAuth = () => {
  const setAuthInfo = useAuthStore((state) => state.setAuthInfo);

  const login = async (provider: string, code: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/v1/login/${provider}?code=${code}`,
      { cache: 'no-store' },
    );

    if (res.ok) {
      const result: TAuthInfo = await res.json();
      localStorage.setItem('refreshToken', result.refreshToken as string);
      setAuthInfo(result);
      return result;
    }
    return false;
  };

  const refresh = async (token: string) => {
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${token}`);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/v1/refresh`,
      { cache: 'no-store', headers },
    );
    if (res.ok) {
      const result: TAuthInfo = await res.json();
      localStorage.setItem('refreshToken', result.refreshToken as string);
      setAuthInfo(result);
      return res.json();
    }
    localStorage.removeItem('refreshToken');
    setAuthInfo(null);
    return false;
  };

  const logout = async (provider: string, token: string) => {
    const headers = new Headers();
    headers.set('Authorization', `bearer ${token}`);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/v1/auth/logout/${provider}`,
      { cache: 'no-store', headers },
    );

    if (res.ok) {
      localStorage.removeItem('refreshToken');
      setAuthInfo(null);
      return true;
    }
    return false;
  };

  const authFetch = async (
    url: string,
    method: 'GET' | 'POST' | 'DELETE' | 'PATCH',
    token: string,
    payload?: any,
  ) => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);

    // 원하는 api 요청
    const initialRes = await fetch(url, {
      method,
      body: payload,
      cache: 'no-store',
      headers,
    });

    // 인증 정보 만료시
    const refreshToken = localStorage.getItem('refreshToken');
    if (initialRes.status === 401 && refreshToken) {
      const newAuthInfo = await refresh(refreshToken); // refresh 요청
      // refresh 성공시 이전에 시도한 api 재요청
      if (newAuthInfo && newAuthInfo.accessToken) {
        headers.set('Authorization', `Bearer ${newAuthInfo.accessToken}`);
        const retryRes = await fetch(url, {
          method,
          body: payload,
          cache: 'no-store',
          headers,
        });
        return retryRes;
      }

      return false; // refresh 실패
    }

    return initialRes;
  };

  return { login, refresh, logout, authFetch };
};
