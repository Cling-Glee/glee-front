/* eslint-disable import/prefer-default-export */

import { useRouter } from 'next/navigation';
import { useAuthStore, useUserStore } from '@/stores/authStore';
import { TAuth, TUser } from '@/types';

type TAuthResponse = Omit<TAuth, 'isLoading' | 'isAuthorized'> & TUser;

export const useAuth = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();

  const login = async (provider: string, code: string) => {
    setAuth({ isLoading: true });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/v1/login/${provider}?code=${code}`,
      { cache: 'no-store' },
    );

    if (res.ok) {
      const result: TAuthResponse = await res.json();
      localStorage.setItem('refreshToken', result.refreshToken as string);
      setAuth({
        isAuthorized: true,
        isLoading: false,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      });
      setUser({
        id: result.id,
        nickName: result.nickName,
        email: result.email,
        isJoinCompleted: result.isJoinCompleted,
      });
      // setAuth({ ...result, isAuthorized: true, isLoading: false });
      return result;
    }
    setAuth(null);
    setUser(null);

    return null;
  };

  const refresh = async (token: string) => {
    setAuth({ isLoading: true });
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${token}`);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/v1/refresh`,
      { cache: 'no-store', headers },
    );
    if (res.ok) {
      const result: TAuthResponse = await res.json();
      localStorage.setItem('refreshToken', result.refreshToken as string);
      setAuth({
        isAuthorized: true,
        isLoading: false,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      });
      setUser({
        id: result.id,
        nickName: result.nickName,
        email: result.email,
        isJoinCompleted: result.isJoinCompleted,
      });
      return result;
    }
    localStorage.removeItem('refreshToken');
    setAuth(null);
    setUser(null);

    return null;
  };

  const logout = async (provider: string, token: string) => {
    setAuth({ isLoading: true });
    const headers = new Headers();
    headers.set('Authorization', `bearer ${token}`);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/v1/auth/logout/${provider}`,
      { cache: 'no-store', headers },
    );

    if (res.ok) {
      localStorage.removeItem('refreshToken');
      setAuth(null);
      setUser(null);
      return true;
    }
    setAuth({ isLoading: false });
    return false;
  };

  const authFetch = async (
    url: string,
    method: 'GET' | 'POST' | 'DELETE' | 'PATCH',
    token: string,
    payload?: any,
  ) => {
    const headers = new Headers();
    const refreshToken = localStorage.getItem('refreshToken');

    headers.append('Authorization', `Bearer ${token}`);
    // 원하는 api 요청
    const initialRes = await fetch(url, {
      method,
      body: payload,
      cache: 'no-store',
      headers,
    });

    // 인증 정보 만료시
    if (initialRes.status === 401 && refreshToken) {
      const refreshRes: TAuthResponse | null = await refresh(refreshToken); // refresh 요청
      // refresh 성공시 이전에 시도한 api 재요청
      if (refreshRes && refreshRes.accessToken) {
        headers.set('Authorization', `Bearer ${refreshRes.accessToken}`);
        const retryRes = await fetch(url, {
          method,
          body: payload,
          cache: 'no-store',
          headers,
        });
        return retryRes;
      }

      router.push('/login');
      return new Error('authorization failed'); // refresh 실패
    }

    return initialRes;
  };

  return { login, refresh, logout, authFetch };
};
