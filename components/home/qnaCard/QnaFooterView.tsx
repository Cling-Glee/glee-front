import Image from 'next/image';

interface QnaFoterViewProps {
  clickedReactions: { [key: string]: number };
  unClickedReactions: { [key: string]: number };
  isEmojiSpread: boolean;
  onClickSpreadButton: () => void;
  onClickReaction: () => void;
  onClickPinButton: () => void;
  onClickShareButton: () => void;
  onClickMoreButton: () => void;
}

const QnaFooterView = ({
  clickedReactions,
  unClickedReactions,
  isEmojiSpread,
  onClickSpreadButton,
  onClickReaction,
  onClickPinButton,
  onClickShareButton,
  onClickMoreButton,
}: QnaFoterViewProps) => (
  <div className="flex mt-2">
    <div className="flex ml-4">
      {Object.entries(clickedReactions).map(
        ([key, value]) => value > 0 && (
            <button
              className={`transition-all duration-500 flex items-center mx-0.5 ${
                isEmojiSpread ? 'bg-zinc-100 rounded-md' : ''
              }`}
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
              <p className="text-[12px] pr-1">{value}</p>
            </button>
        ),
      )}
    </div>
    <div
      className={`h-[27px] flex transition-all duration-500 overflow-clip ${
        isEmojiSpread || Object.keys(clickedReactions).length === 0
          ? 'max-w-[140px]'
          : 'max-w-0'
      }`}
    >
      {Object.keys(unClickedReactions).map((key) => (
        <button
          key={key}
          className={`min-w-[24px] ${
            Object.keys(clickedReactions).length > 0 ? 'bg-zinc-100' : ''
          } rounded-md mx-[2px] flex items-center`}
          id={key}
          onClick={onClickReaction}
        >
          <Image
            className="w-full"
            src={`/${key}-icon.svg`}
            alt=""
            width={20}
            height={20}
          />
        </button>
      ))}
    </div>
    {Object.keys(clickedReactions).length > 0 && (
      <button
        className="transition-all delay-700"
        onClick={onClickSpreadButton}
      >
        {isEmojiSpread ? (
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="6" fill="#D9D9D9" />
            <path
              d="M9.85742 6.91016V7.83594H6.14258V6.91016H9.85742Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#D9D9D9" />
            <path
              d="M5.51953 8.42578V6.15234H3.25781V5.20312H5.51953V2.94141H6.46875V5.20312H8.74219V6.15234H6.46875V8.42578H5.51953Z"
              fill="black"
            />
          </svg>
        )}
      </button>
    )}
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
