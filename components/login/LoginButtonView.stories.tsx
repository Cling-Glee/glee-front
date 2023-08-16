import { Meta, StoryObj } from '@storybook/react';
import LoginButtonView from '@/components/login/LoginButtonView';

const meta: Meta<typeof LoginButtonView> = {
  title: 'login/button',
  component: LoginButtonView,
  tags: ['autodocs'],
};
export default meta;
type TStory = StoryObj<typeof LoginButtonView>;

export const LoginButtonStory: TStory = {
  name: 'LoginButton',
  argTypes: {
    title: {
      control: 'radio',
      options: ['카카오', '트위터', '인스타그램'],
    },
  },
  args: {
    title: '카카오',
    handleClickLoginButton: undefined,
  },
};
