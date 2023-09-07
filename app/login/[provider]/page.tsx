import { redirect } from 'next/navigation';

interface RedirectURIPageProps {
  params: { provider: string };
  searchParams: { [key: string]: string | undefined };
}

const loginRequestFn = async (provider: string, code: string) => {
  const res = await fetch(
    `${process.env.SERVER_BASE_URL}/v1/login/${provider}?code=${code}`,
    { cache: 'no-store' },
  );

  if (res.ok) return res.json();
  return {
    id: 2,
    nickname: '오대균',
    email: 'obj0202@nate.com',
    accessToken:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjk0MDY3MDkyLCJleHAiOjE2OTQwNjczOTJ9.vpe7wsiTI56b_OV8eE-t0GstisWmsj0M0iY_Q4KC3Jc',
    refreshToken:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjk0MDY3MDkyLCJleHAiOjE2OTUyNzY2OTJ9.pDacGNwWd95lrcgWx5EWuQKJo4DyGTXbIITJ6OeHZfY',
  };
};

const page = async ({ params, searchParams }: RedirectURIPageProps) => {
  if (!searchParams || !searchParams.code) redirect('/login');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const res = await loginRequestFn(params.provider, searchParams.code);

  redirect('/');
};

export default page;
