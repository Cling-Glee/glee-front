'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import LoginButton from '@/components/login/LoginButton';

const Login = () => {
  const handleClickKakaoLoginButton = () => {};
  const handleClickTwitterLoginButton = () => {};
  const handleClickInstagramLoginButton = () => {};

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

  return (
    <div className="flex flex-col items-center">
      {isLoading && <div className="">loading</div>}
      <div className="flex flex-col">
        <LoginButton
          title="카카오"
          onClickLoginButton={handleClickKakaoLoginButton}
        />
        <LoginButton
          title="트위터"
          onClickLoginButton={handleClickTwitterLoginButton}
        />
        <LoginButton
          title="인스타그램"
          onClickLoginButton={handleClickInstagramLoginButton}
        />
      </div>
      <div className="">비로그인으로 시작</div>
    </div>
  );
};

export default Login;
