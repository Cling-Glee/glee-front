import { Meta, StoryObj } from '@storybook/react';
import TabView from '@/components/home/tab/TabView';

const meta: Meta<typeof TabView> = {
  title: 'home/tab',
  component: TabView,
  tags: ['autodocs'],
};
export default meta;
type TStory = StoryObj<typeof TabView>;

export const TabStory: TStory = {
  name: 'Tab',
  argTypes: {},
  args: {
    newQuestionCount: 3,
    answeredQuestionCount: 5,
    isNewQuestionTabActive: true,
    setIsNewQuestionTabActive: undefined,
  },
};
