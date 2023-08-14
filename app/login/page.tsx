import LoginButton from '@/components/LoginButton';

const Login = () => {
  const kakaoRequestUrl = '';
  const twitterRequestUrl = '';
  const instagramRequestUrl = '';

  // client component에서 api key를 다루면 브라우저에 노출되므로, server component에서 prop으로 전달
  return (
    <div className="flex flex-col items-center">
      <div className="loginBtns flex flex-col">
        <LoginButton
          title="카카오"
          key={process.env.KAKAO_API_KEY}
          url={kakaoRequestUrl}
        />
        <LoginButton
          title="트위터"
          key={process.env.KAKAO_API_KEY}
          url={twitterRequestUrl}
        />
        <LoginButton
          title="인스타그램"
          key={process.env.KAKAO_API_KEY}
          url={instagramRequestUrl}
        />
      </div>
      <div className="">비로그인으로 시작</div>
    </div>
  );
};

export default Login;
