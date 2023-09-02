'use client';

// import { useRouter } from 'next/navigation';
import { TQna } from '@/types';
import QnaCardView from '@/components/home/qnaCard/QnaCardView';

export interface QnaCardProps {
  qna: TQna;
}

const QnaCard = ({ qna }: QnaCardProps) => {
  // const router = useRouter();

  const handleClickQnaCard = () => {
    // if (qna.answer) router.push(`/${qna.id}`);
  };

  const handleClickDMButton = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <QnaCardView
      qna={qna}
      onClickQnaCard={handleClickQnaCard}
      onClickDMButton={handleClickDMButton}
    />
  );
};
export default QnaCard;
