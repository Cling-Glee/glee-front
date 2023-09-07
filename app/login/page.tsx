'use client';

import LoginButton from '@/components/login/LoginButton';

const Login = () => {
  const handleClickKakaoLoginButton = () => {
    const key = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
    const redirectUri =
      process.env.NEXT_PUBLIC_SOCIAL_LOGIN_REDIRECT_URI!.concat('/kakao');
    const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${key}&\nredirect_uri=${redirectUri}&response_type=code`;

    window.location.href = authUrl;
  };

  const handleClickTwitterLoginButton = () => {
    const key = process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID;
    const redirectUri =
      process.env.NEXT_PUBLIC_SOCIAL_LOGIN_REDIRECT_URI!.concat('/twitter');
    const authUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${key}&redirect_uri=${redirectUri}&scope=tweet.read%20users.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain`;
    window.location.href = authUrl;
  };

  const handleClickInstagramLoginButton = () => {
    const key = process.env.NEXT_PUBLIC_INSTAGRAM_API_KEY;
    const redirectUri =
      process.env.NEXT_PUBLIC_SOCIAL_LOGIN_REDIRECT_URI!.concat('/instagram');
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${key}&redirect_uri=${redirectUri}&scope=user_profile&response_type=code`;

    window.location.href = authUrl;
  };

  return (
    <div className="flex flex-col items-center">
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
