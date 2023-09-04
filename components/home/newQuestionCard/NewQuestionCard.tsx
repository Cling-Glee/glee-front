import { TQna } from '@/types';
import NewQuestionCardView from '@/components/home/newQuestionCard/NewQuestionCardView';

interface NewQuestionCardProps {
  qna: TQna;
}

const NewQuestionCard = ({ qna }: NewQuestionCardProps) => {
  const handleClickAcceptButton = () => {};
  const handleClickRejectButton = () => {};
  const handleClickAnswerButton = () => {};
  const handleClickMoreButton = () => {};
  return (
    <NewQuestionCardView
      qna={qna}
      onClickAcceptButton={handleClickAcceptButton}
      onClickRejectButton={handleClickRejectButton}
      onClickAnswerButton={handleClickAnswerButton}
      onClickMoreButton={handleClickMoreButton}
    />
  );
};

export default NewQuestionCard;
