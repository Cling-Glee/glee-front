'use client';

import PostTemplate from '@/components/home/PostTemplate';
import QnaFooter from '@/components/home/qnaCard/QnaFooter';
import { TQna } from '@/types';

interface QnaCardViewProps {
  qna: TQna;
  onClickQnaCard: () => void;
  onClickDMButton: (e: React.MouseEvent) => void;
}

const QnaCardView = ({
  qna,
  onClickQnaCard,
  onClickDMButton,
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
        onClickDMButton={onClickDMButton}
        isQuestion
      />
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
    </div>
    <QnaFooter reactions={qna.reactions!} />
  </div>
);

export default QnaCardView;
