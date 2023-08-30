import { Meta, StoryObj } from '@storybook/react';
import { TQna } from '@/types';
import QnaCardView from './QnaCardView';

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
  like: 4,
  thumb: 6,
  check: 7,
  smile: 0,
  sad: 0,
};

const QNA: TQna = {
  id: 1,
  state: 'new',
  profileImage:
    'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg',
  userName: '익명아님',
  date: new Date('2023/8/24'),
  content: '피자가 먹고 싶어요.',
  answer: null,
  like: 1,
  thumb: 0,
  check: 0,
  smile: 8,
  sad: 3,
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

export const QnaCardStory2: TStory = {
  name: 'QnaCard2',
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    qna: QNA,
  },
};
