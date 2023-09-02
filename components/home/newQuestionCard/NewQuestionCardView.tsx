'use client';

import PostTemplate from '@/components/home/PostTemplate';
import { TQna } from '@/types';

interface NewQuestionCardViewProps {
  qna: TQna;
  onClickAcceptButton:()=> void;
  onClickRejectButton: () => void;
  onClickAnswerButton: () => void;
}

const NewQuestionCardView = ({
  qna,
  onClickAcceptButton,
  onClickRejectButton,
  onClickAnswerButton,
}: NewQuestionCardViewProps) => (
  <div className="rounded-xl border border-neutral-300 flex flex-col mb-3">
    <PostTemplate
      postInfo={{
        id: qna.id,
        profileImage: qna.profileImage,
        userName: qna.userName,
        content: qna.content,
        date: qna.date,
      }}
      isDMButtonNeeded={qna.state === 'accepted'}
      isAnswer={false}
    />
    {qna.state === 'accepted' ? (
      <button onClick={onClickAnswerButton} className="mt-[20.5px] m-3 pl-3 h-[38px] bg-zinc-100 rounded-md text-neutral-500 text-xs font-light text-left">
        답변을 보내주세요
      </button>
    ) : (
      <div className="flex mt-[23.5px]">
        <button
          className="w-1/2 h-[42px] bg-zinc-100 rounded-bl-xl text-xs font-semibold"
          onClick={onClickRejectButton}
        >
          거절하기
        </button>
        <button
          className="w-1/2  h-[42px] bg-black rounded-br-xl text-white text-xs font-semibold"
          onClick={onClickAcceptButton}
        >
          답변하기
        </button>
      </div>
    )}
  </div>
);

export default NewQuestionCardView;
