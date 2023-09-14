'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';

export interface WithAuthProps {} // 추후에 인증 과정에 더 필요한 props를 위해

const withAuth = <T extends WithAuthProps = WithAuthProps>(
  Component: React.ComponentType<T>,
) => {
  const ComponentWithAuth = (props: Omit<T, keyof WithAuthProps>) => {
    const isAuthorized = useAuthStore((state) => state.auth.isAuthorized);
    const isLoading = useAuthStore((state) => state.auth.isLoading);
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !isAuthorized) {
        router.push('/');
      }
    }, [isAuthorized, isLoading, router]);

    return !isLoading && isAuthorized ? (
      <Component {...(props as T)} />
    ) : (
      <div className="">loading</div> // 렌더링과 라우팅 사이의 딜레이 시 보여질 화면
    );
  };

  return ComponentWithAuth;
};

export default withAuth;
