import { Meta, StoryObj } from '@storybook/react';
import NewQuestionCardView from '@/components/home/newQuestionCard/NewQuestionCardView';
import { TQna } from '@/types';

const meta: Meta<typeof NewQuestionCardView> = {
  title: 'home/newQuestionCard',
  component: NewQuestionCardView,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof NewQuestionCardView>;

const answeredQNA: TQna = {
  id: 1,
  state: 'answered',
  profileImage: '',
  userName: null,
  date: new Date('2023/8/24'),
  content: '오늘 점심 메뉴 뭐야?',
};

export const NewQuestionCardStory: TStory = {
  name: 'newQuestionCard',
  args: {
    qna: answeredQNA,
  },
};
