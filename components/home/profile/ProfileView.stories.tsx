import { Meta, StoryObj } from '@storybook/react';
import ProfileView from '@/components/home/profile/ProfileView';

const meta: Meta<typeof ProfileView> = {
  title: 'home/profile',
  component: ProfileView,
  tags: ['autodocs'],
};
export default meta;
type TStory = StoryObj<typeof ProfileView>;

export const ProfileStory: TStory = {
  name: 'Profile',
  argTypes: {
    profileImage: {
      control: 'radio',
      options: [
        null,
        'https://camo.githubusercontent.com/f21f1fa29dfe5e1d0772b0efe2f43eca2f6dc14f2fede8d9cbef4a3a8210c91d/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67',
      ],
    },
  },
  args: {
    profileImage:
      'https://camo.githubusercontent.com/f21f1fa29dfe5e1d0772b0efe2f43eca2f6dc14f2fede8d9cbef4a3a8210c91d/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67',
    name: '안젤라',
    description: '욕설, 비방 시 즉시 신고 인스타 @~~~~',
    answeredQuestionCount: 30,
    totalQuestionCount: 374,
    followerCount: 2580,
    onClickEditProfileButton: undefined,
    onClickFollowListButton: undefined,
  },
};
