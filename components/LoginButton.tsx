'use client';

import React from 'react';
import LoginButtonView from './LoginButtonView';

interface LoginButtonProps {
  title: string;
  key?: string;
  url?: string;
}

const LoginButton = ({ title, key, url }: LoginButtonProps) => {
  console.log(key, url);
  const handleClickLoginButton = () => {};

  return (
    <LoginButtonView
      title={title}
      handleClickLoginButton={handleClickLoginButton}
    />
  );
};

export default LoginButton;
