'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

interface RedirectURIPageProps {
  params: { provider: string };
  searchParams: { [key: string]: string | undefined };
}

const RedirectPage = ({ params, searchParams }: RedirectURIPageProps) => {
  const router = useRouter();
  const { login } = useAuth();

  if (!searchParams || !searchParams.code) router.push('/login');

  useEffect(() => {
    (async () => {
      const result = await login(params.provider, searchParams.code as string);
      // 임시로 라우팅 구현, 추후에 이전페이지, 혹은 특정 페이지로 이동하도록 수정해야 함
      if (result) router.push('/login');
      else router.push('/');
    })();
  });

  return <>loading</>;
};

export default RedirectPage;
