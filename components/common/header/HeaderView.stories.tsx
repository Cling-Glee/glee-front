import { Meta, StoryObj } from '@storybook/react';
import HeaderView from '@/components/common/header/HeaderView';

const meta: Meta<typeof HeaderView> = {
  title: 'common/header',
  component: HeaderView,
  tags: ['autodocs'],
};
export default meta;
type TStory = StoryObj<typeof HeaderView>;

export const HeaderStory: TStory = {
  name: 'Header',
  argTypes: {},
  args: {
    isBookmarked: false,
    hasBookmarkButton: true,
    hasShareButton: true,
    onClickBookmarkButton: undefined,
    onClickShareButton: undefined,
  },
};
