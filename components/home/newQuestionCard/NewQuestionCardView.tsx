'use client';

import PostTemplate from '@/components/home/PostTemplate';
import { TQna } from '@/types';

interface QnaCardViewProps {
  qna: TQna;
  onClickAnswerButton?: () => void;
  onClickRejectButton?: () => void;
}

const NewQuestionCardView = ({
  qna,
  onClickAnswerButton,
  onClickRejectButton,
}: QnaCardViewProps) => (
  <div className="">
    <div className="rounded-xl border border-neutral-300">
      <PostTemplate
        postInfo={{
          profileImage: qna.profileImage,
          userName: qna.userName,
          content: qna.content,
          date: qna.date,
        }}
        isQuestion
      />
      <div className="flex">
        <button
          className="w-1/2 h-12 bg-neutral-100 rounded-bl-xl border-t border-r border-neutral-300"
          onClick={onClickRejectButton}
        >
          거절하기
        </button>
        <button
          className="w-1/2 h-12 text-white bg-black rounded-br-xl border-t border-l border-black"
          onClick={onClickAnswerButton}
        >
          답변하기
        </button>
      </div>
    </div>
  </div>
);

export default NewQuestionCardView;
