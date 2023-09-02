import Image from 'next/image';
import { TReactions } from '@/types';

interface QnaFoterViewProps {
  reactions: TReactions;
  isEmojiSpread: boolean;
  onClickSpreadButton: () => void;
  onClickReaction: () => void;
  onClickPinButton: () => void;
  onClickShareButton: () => void;
  onClickMoreButton: () => void;
}

const QnaFooterView = ({
  reactions,
  isEmojiSpread,
  onClickSpreadButton,
  onClickReaction,
  onClickPinButton,
  onClickShareButton,
  onClickMoreButton,
}: QnaFoterViewProps) => (
  <div className="flex mt-2">
    <div className="flex ml-4">
      {Object.entries(reactions).map(
        ([key, value]) => value > 0 && (
            <button
              className="flex items-center mx-0.5"
              key={key}
              id={key}
              onClick={onClickReaction}
            >
              <Image
                src={`/${key}-icon.svg`}
                alt=""
                width={20}
                height={20}
                className="mr-0.5"
              />
              <p className="text-[12px]">{value}</p>
            </button>
        ),
      )}
    </div>
    <div
      className={`flex transition-all overflow-clip bg-neutral-100 rounded-lg ${
        isEmojiSpread ? 'w-[120px]' : 'w-0'
      }`}
    >
      {Object.keys(reactions).map((key) => (
        <button className="mx-0.5" key={key} id={key} onClick={onClickReaction}>
          <Image src={`/${key}-icon.svg`} alt="" width={20} height={20} />
        </button>
      ))}
    </div>
    <button className="" onClick={onClickSpreadButton}>
      <Image src="/spread-reaction-icon.svg" alt="" width={20} height={20} />
    </button>
    <div className="ml-auto mr-2">
      <button className="" onClick={onClickPinButton}>
        <Image src="/pin-icon.svg" alt="" width={20} height={20} />
      </button>
      <button className="" onClick={onClickShareButton}>
        <Image src="/share-icon.svg" alt="" width={20} height={20} />
      </button>
      <button className="" onClick={onClickMoreButton}>
        <Image src="/more-icon.svg" alt="" width={20} height={20} />
      </button>
    </div>
  </div>
);

export default QnaFooterView;
