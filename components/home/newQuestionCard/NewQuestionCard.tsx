import { TQna } from '@/types';
import NewQuestionCardView from '@/components/home/newQuestionCard/NewQuestionCardView';

interface NewQuestionCardProps {
  qna: TQna;
}

const NewQuestionCard = ({ qna }: NewQuestionCardProps) => {
  const handleClickAcceptButton = () => {};
  const handleClickRejectButton = () => {};

  return (
    <NewQuestionCardView
      qna={qna}
      onClickAcceptButton={handleClickAcceptButton}
      onClickRejectButton={handleClickRejectButton}
    />
  );
};

export default NewQuestionCard;
