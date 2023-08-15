'use client';

interface LoginButtonViewProps {
  title: string;
  handleClickLoginButton: () => void;
}

const LoginButtonView = ({
  title,
  handleClickLoginButton,
}: LoginButtonViewProps) => (
  <button className="" onClick={handleClickLoginButton}>
    {title} 로그인
  </button>
);

export default LoginButtonView;
