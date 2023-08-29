'use client';

import Image from 'next/image';
import { TQna } from '@/types';
import PostTemplate from './PostTemplate';

interface QnaCardViewProps {
  qna: TQna;
  onClickQnaCard: () => void;
  onClickPinButton: () => void;
  onClickShareButton: () => void;
  onClickMoreButton: () => void;

  onClickAnswerButton: () => void;
  onClickRejectButton: () => void;
}

const QnaCardView = ({
  qna,
  onClickQnaCard,
  onClickPinButton,
  onClickShareButton,
  onClickMoreButton,
  onClickAnswerButton,
  onClickRejectButton,
}: QnaCardViewProps) => (
  <div className="w-[358px]">
    <div
      className="rounded-xl border border-neutral-300"
      onClick={onClickQnaCard}
    >
      <PostTemplate
        profileImage={qna.profileImage}
        userName={qna.userName}
        content={qna.content}
        date={qna.date}
        isQuestion
      />
      {qna.answer ? (
        <PostTemplate
          profileImage={qna.answer.profileImage}
          userName={qna.answer.userName}
          content={qna.answer.content}
          date={qna.answer.date}
          isQuestion={false}
          containerStyles="w-auto bg-neutral-100 rounded-bl-xl rounded-br-xl border-t border-neutral-300"
        />
      ) : (
        <div className="flex">
          <button className="w-1/2" onClick={onClickRejectButton}>
            거절하기
          </button>
          <button className="w-1/2" onClick={onClickAnswerButton}>
            답변하기
          </button>
        </div>
      )}
    </div>
    <div className="flex mt-2">
      <div className="ml-4 mr-auto">
        <button className="mx-0.5">
          <Image src="/heart-icon.svg" alt="" width={20} height={20} />
        </button>
        <button className="mx-0.5">
          <Image src="/thumb-icon.svg" alt="" width={20} height={20} />
        </button>
        <button className="mx-0.5">
          <Image src="/check-icon.svg" alt="" width={20} height={20} />
        </button>
        <button className="mx-0.5">
          <Image src="/smile-icon.svg" alt="" width={20} height={20} />
        </button>
        <button className="mx-0.5">
          <Image src="/sad-icon.svg" alt="" width={20} height={20} />
        </button>
      </div>
      <div className="mr-2">
        <button className="" onClick={onClickPinButton}>
          <Image src="/pin-icon.png" alt="" width={20} height={20} />
        </button>
        <button className="" onClick={onClickShareButton}>
          <Image src="/share-icon.svg" alt="" width={20} height={20} />
        </button>
        <button className="" onClick={onClickMoreButton}>
          <Image src="/more-icon.svg" alt="" width={20} height={20} />
        </button>
      </div>
    </div>
  </div>
);

export default QnaCardView;
