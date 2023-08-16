'use client';

import LoginButtonView from './LoginButtonView';

interface LoginButtonProps {
  title: string;
  handleClickLoginButton: () => void;
}

const LoginButton = ({ title, handleClickLoginButton }: LoginButtonProps) => (
  <LoginButtonView
    title={title}
    handleClickLoginButton={handleClickLoginButton}
  />
);

export default LoginButton;
