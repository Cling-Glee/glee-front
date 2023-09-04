'use client';

import LoginButtonView from '@/components/login/LoginButtonView';

interface LoginButtonProps {
  title: string;
  onClickLoginButton: () => void;
}

const LoginButton = ({ title, onClickLoginButton }: LoginButtonProps) => (
  <LoginButtonView title={title} onClickLoginButton={onClickLoginButton} />
);

export default LoginButton;
