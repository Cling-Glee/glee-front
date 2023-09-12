'use client';

import { useEffect } from 'react';

import { useAuthStore } from '@/stores/authStore';
import { useAuth } from '@/hooks/auth';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const isAuthorized = useAuthStore((state) => state.authInfo.isAuthorized);

  const { refresh } = useAuth();

  useEffect(() => {
    // refresh 여부를 알 수 있는 코드, 당장은 필요 없으나 이후 의도치 않은 refresh가 계속 발생할 경우 사용
    // const entries = performance.getEntriesByType('navigation')[0];
    // const entriesNavigationTiming = entries as PerformanceNavigationTiming;
    // entriesNavigationTiming.type === 'reload'

    const refreshToken = localStorage.getItem('refreshToken');
    if (!isAuthorized && refreshToken) refresh(refreshToken as string);
  }, [isAuthorized, refresh]);

  return <div>{children}</div>;
};

export default AuthProvider;
