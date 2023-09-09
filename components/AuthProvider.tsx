'use client';

import { useEffect } from 'react';

import { useAuthStore } from '@/stores/authStore';
import { useAuth } from '@/hooks/auth';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const isAuthorized = useAuthStore((state) => state.authInfo.isAuthorized);

  const { refresh } = useAuth();

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!isAuthorized && refreshToken) {
      refresh(refreshToken as string);
    }
  }, [isAuthorized, refresh]);

  return <div>{children}</div>;
};

export default AuthProvider;
