'use client';

import { TQna } from '@/types';
import PostTemplate from './PostTemplate';
import QnaFooter from './QnaFooter';

interface QnaCardViewProps {
  qna: TQna;
  onClickQnaCard: () => void;
  onClickAnswerButton?: () => void;
  onClickRejectButton?: () => void;
}

const QnaCardView = ({
  qna,
  onClickQnaCard,
  onClickAnswerButton,
  onClickRejectButton,
}: QnaCardViewProps) => (
  <div className="">
    <div
      className="rounded-xl border border-neutral-300"
      onClick={onClickQnaCard}
    >
      <PostTemplate
        postInfo={{
          profileImage: qna.profileImage,
          userName: qna.userName,
          content: qna.content,
          date: qna.date,
        }}
        isQuestion
      />
      {qna.state === 'answered' ? (
        <PostTemplate
          postInfo={{
            profileImage: qna.answer!.profileImage,
            userName: qna.answer!.userName,
            content: qna.answer!.content,
            date: qna.answer!.date,
          }}
          isQuestion={false}
          containerStyles="w-auto bg-neutral-100 rounded-bl-xl rounded-br-xl border-t border-neutral-300"
        />
      ) : (
        <div className="flex">
          <button className="w-1/2 h-12 bg-neutral-100 rounded-bl-xl border-t border-r border-neutral-300" onClick={onClickRejectButton}>
            거절하기
          </button>
          <button className="w-1/2 h-12 text-white bg-black rounded-br-xl border-t border-l border-black" onClick={onClickAnswerButton}>
            답변하기
          </button>
        </div>
      )}
    </div>
    {qna.answer && (
      <QnaFooter
        reactions={{
          like: qna.like,
          thumb: qna.thumb,
          check: qna.check,
          smile: qna.smile,
          sad: qna.sad,
        }}
      />
    )}
  </div>
);

export default QnaCardView;
