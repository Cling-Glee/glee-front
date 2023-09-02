import { TQna } from '@/types';
import NewQuestionCardView from '@/components/home/newQuestionCard/NewQuestionCardView';

interface NewQuestionCardProps {
  qna: TQna;
}

const NewQuestionCard = ({ qna }: NewQuestionCardProps) => {
  const handleClickAnswerButton = () => {};
  const handleClickRejectButton = () => {};
  return (
    <NewQuestionCardView
      qna={qna}
      onClickAnswerButton={handleClickAnswerButton}
      onClickRejectButton={handleClickRejectButton}
    />
  );
};

export default NewQuestionCard;
