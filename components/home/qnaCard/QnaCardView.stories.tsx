import { Meta, StoryObj } from '@storybook/react';
import QnaCardView from '@/components/home/qnaCard/QnaCardView';
import { TQna } from '@/types';

const meta: Meta<typeof QnaCardView> = {
  title: 'home/qnaCard',
  component: QnaCardView,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof QnaCardView>;

const answeredQNA: TQna = {
  id: 1,
  state: 'answered',
  profileImage: '',
  userName: null,
  date: new Date('2023/8/24'),
  content: '오늘 점심 메뉴 뭐야?',
  answer: {
    id: 1,
    profileImage: null,
    userName: '구마유시',
    date: new Date('2023/8/29 21:00:00'),
    content:
      '나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었습니다.',
  },
  reactions: {
    LIKE: 4,
    THUMB: 6,
    CHECK: 7,
    SMILE: 0,
    SAD: 0,
  },
};

export const QnaCardStory1: TStory = {
  name: 'QnaCard1',
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    qna: answeredQNA,
  },
};
