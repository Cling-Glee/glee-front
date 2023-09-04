'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import LoginButton from '@/components/login/LoginButton';

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const params = useSearchParams();

  useEffect(() => {
    const code = params.get('code');
    if (code) {
      // server에 code 전달
      //       const sendCode = async () => {
      //         await fetch('https://server.com', {
      //           method: 'POST',
      //           body: code,
      //         });
      //       };
      //       try {
      //         sendCode();
      setIsLoading(false);
      //       } catch (error) {
      //         console.log(error);
      //       }
    }
  }, [params]);
  
  const handleClickKakaoLoginButton = () => {
    const key = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
    const redirectUri = process.env.NEXT_PUBLIC_SOCIAL_LOGIN_REDIRECT_URI;
    const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${key}&\nredirect_uri=${redirectUri}&response_type=code`;

    window.location.href = authUrl;
  };

  const handleClickTwitterLoginButton = () => {};

  const handleClickInstagramLoginButton = () => {
    const key = process.env.NEXT_PUBLIC_INSTAGRAM_API_KEY;
    const redirectUri = process.env.NEXT_PUBLIC_SOCIAL_LOGIN_REDIRECT_URI;
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${key}&redirect_uri=${redirectUri}&scope=user_profile&response_type=code`;

    window.location.href = authUrl;
  };

  return (
    <div className="flex flex-col items-center">
      {isLoading && <div className="">loading</div>}
      <div className="flex flex-col">
        <LoginButton
          title="카카오"
          handleClickLoginButton={handleClickKakaoLoginButton}
        />
        <LoginButton
          title="트위터"
          handleClickLoginButton={handleClickTwitterLoginButton}
        />
        <LoginButton
          title="인스타그램"
          handleClickLoginButton={handleClickInstagramLoginButton}
        />
      </div>
      <div className="">비로그인으로 시작</div>
    </div>
  );
};

export default Login;
