'use client';

import PostTemplate from '@/components/home/PostTemplate';
import QnaFooter from '@/components/home/qnaCard/QnaFooter';
import { TQna } from '@/types';

interface QnaCardViewProps {
  qna: TQna;
  onClickQnaCard: () => void;
}

const QnaCardView = ({
  qna,
  onClickQnaCard,
}: QnaCardViewProps) => (
  <div className="">
    <div
      className="rounded-xl border border-neutral-300 flex flex-col mb-3"
      onClick={onClickQnaCard}
    >
      <PostTemplate
        postInfo={{
          id: qna.id,
          profileImage: qna.profileImage,
          userName: qna.userName,
          content: qna.content,
          date: qna.date,
        }}
        isDMButtonNeeded
        isAnswer={false}
      />
      <PostTemplate
        postInfo={{
          profileImage: qna.answer!.profileImage,
          userName: qna.answer!.userName,
          content: qna.answer!.content,
          date: qna.answer!.date,
        }}
        isDMButtonNeeded={false}
        isAnswer
      />
    </div>
    <QnaFooter reactions={qna.reactions!} />
  </div>
);

export default QnaCardView;
