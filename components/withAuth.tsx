'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';

export interface WithAuthProps {} // 추후에 인증 과정에 더 필요한 props를 위해

export default function withAuth<T extends WithAuthProps = WithAuthProps>(
  Component: React.ComponentType<T>,
) {
  const ComponentWithAuth = (props: Omit<T, keyof WithAuthProps>) => {
    const isAuthorized = useAuthStore((state) => state.authInfo.isAuthorized);
    const isLoading = useAuthStore((state) => state.authInfo.isLoading);
    const router = useRouter();

    useEffect(() => {
      // 가장 초기 상태에는 undefined이므로, 해당 경우를 고려 해주어야 함
      if (isLoading !== undefined && !isLoading && !isAuthorized) {
        router.push('/login');
      }
    });

    return !isLoading && isAuthorized ? (
      <Component {...(props as T)} />
    ) : (
      <div className="">loading</div> // 렌더링과 라우팅 사이의 딜레이 시 보여질 화면
    );
  };

  return ComponentWithAuth;
}
