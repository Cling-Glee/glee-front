'use client';

// import { useRouter } from 'next/navigation';
import { TQna } from '@/types';
import QnaCardView from './QnaCardView';

export interface QnaCardProps {
  qna: TQna;
}

const QnaCard = ({ qna }: QnaCardProps) => {
  // const router = useRouter();

  const handleClickQnaCard = () => {
    // if (qna.answer) router.push(`/${qna.id}`);
  };

  const handleClickAnswerButton = () => {
    if (qna.state === 'new') {
      // router.push(`/${qna.id}`);
    }
  };
  const handleClickRejectButton = () => {
    if (qna.state === 'new') {
      // do something
    }
  };

  return (
    <QnaCardView
      qna={qna}
      onClickQnaCard={handleClickQnaCard}
      onClickAnswerButton={handleClickAnswerButton}
      onClickRejectButton={handleClickRejectButton}
    />
  );
};
export default QnaCard;
