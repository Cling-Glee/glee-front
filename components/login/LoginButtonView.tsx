'use client';

interface LoginButtonViewProps {
  title: string;
  onClickLoginButton: () => void;
}

const LoginButtonView = ({
  title,
  onClickLoginButton,
}: LoginButtonViewProps) => (
  <button className="" onClick={onClickLoginButton}>
    {title} 로그인
  </button>
);

export default LoginButtonView;
