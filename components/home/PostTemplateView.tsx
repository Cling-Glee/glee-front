import Image from 'next/image';
import { convertDateToFormattedDate } from '@/utils';

interface PostTemplateViewProps {
  postInfo: {
    id?: number;
    profileImage: string | null;
    userName: string | null;
    content: string;
    date: Date;
  };
  isDMButtonNeeded?: boolean;
  isMoreButtonNeeded?: boolean;
  isAnswer?: boolean;
  onClickDMButton: (e: React.MouseEvent) => void;
  onClickProfile?: (e: React.MouseEvent) => void;
  onClickMoreButton?: () => void;
}

const PostTemplateView = ({
  postInfo,
  onClickMoreButton,
  isDMButtonNeeded,
  isAnswer,
  onClickDMButton,
  onClickProfile,
}: PostTemplateViewProps) => {
  const answerContainerStyle = 'mt-[15px] pb-[16px] w-auto bg-neutral-100 rounded-bl-xl rounded-br-xl border-t border-neutral-300';

  return (
    <div className={`pb-0 p-[12px] ${isAnswer ? answerContainerStyle : ''}`}>
      <div className="flex items-center mb-[11.5px]">
        <div
          className={`flex mr-auto items-center ${
            postInfo.userName ? 'cursor-pointer' : ''
          }`}
          onClick={onClickProfile}
        >
          {postInfo.profileImage ? (
            <Image
              src={postInfo.profileImage || '/profile-icon.svg'}
              alt="profile image"
              width={32}
              height={32}
              className="w-8 h-8 bg-zinc-300 rounded-[10px] mr-2"
            />
          ) : (
            <svg
              className="w-8 h-8 bg-zinc-300 rounded-[10px] mr-2"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="10" fill="#D9D9D9" />
              <path
                d="M16.0002 15.9997C15.0835 15.9997 14.2988 15.6733 13.646 15.0205C12.9932 14.3677 12.6668 13.583 12.6668 12.6663C12.6668 11.7497 12.9932 10.965 13.646 10.3122C14.2988 9.6594 15.0835 9.33301 16.0002 9.33301C16.9168 9.33301 17.7016 9.6594 18.3543 10.3122C19.0071 10.965 19.3335 11.7497 19.3335 12.6663C19.3335 13.583 19.0071 14.3677 18.3543 15.0205C17.7016 15.6733 16.9168 15.9997 16.0002 15.9997ZM11.0002 22.6663C10.5418 22.6663 10.1495 22.5031 9.82308 22.1768C9.49669 21.8504 9.3335 21.458 9.3335 20.9997V20.333C9.3335 19.8608 9.45502 19.4268 9.69808 19.0309C9.94113 18.6351 10.2641 18.333 10.6668 18.1247C11.5279 17.6941 12.4029 17.3712 13.2918 17.1559C14.1807 16.9406 15.0835 16.833 16.0002 16.833C16.9168 16.833 17.8196 16.9406 18.7085 17.1559C19.5974 17.3712 20.4724 17.6941 21.3335 18.1247C21.7363 18.333 22.0592 18.6351 22.3022 19.0309C22.5453 19.4268 22.6668 19.8608 22.6668 20.333V20.9997C22.6668 21.458 22.5036 21.8504 22.1772 22.1768C21.8509 22.5031 21.4585 22.6663 21.0002 22.6663H11.0002Z"
                fill="#8D8D8D"
              />
            </svg>
          )}

          <span className="h-fit text-xs font-semibold mr-2">
            {postInfo.userName || '익명의 위스퍼'}
          </span>
          {isDMButtonNeeded && (
            <button className="" onClick={onClickDMButton}>
              <Image
                src="/dm-icon.svg"
                alt="direct message icon"
                width={12}
                height={12}
              />
            </button>
          )}
        </div>
        <span className="text-neutral-500 text-xs font-normal mr-1">
          {convertDateToFormattedDate(postInfo.date)}
        </span>
        {onClickMoreButton && (
          <button className="" onClick={onClickMoreButton}>
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_162_3039)">
                <path
                  d="M7.99984 5.33366C8.73317 5.33366 9.33317 4.73366 9.33317 4.00033C9.33317 3.26699 8.73317 2.66699 7.99984 2.66699C7.2665 2.66699 6.6665 3.26699 6.6665 4.00033C6.6665 4.73366 7.2665 5.33366 7.99984 5.33366ZM7.99984 6.66699C7.2665 6.66699 6.6665 7.26699 6.6665 8.00033C6.6665 8.73366 7.2665 9.33366 7.99984 9.33366C8.73317 9.33366 9.33317 8.73366 9.33317 8.00033C9.33317 7.26699 8.73317 6.66699 7.99984 6.66699ZM7.99984 10.667C7.2665 10.667 6.6665 11.267 6.6665 12.0003C6.6665 12.7337 7.2665 13.3337 7.99984 13.3337C8.73317 13.3337 9.33317 12.7337 9.33317 12.0003C9.33317 11.267 8.73317 10.667 7.99984 10.667Z"
                  fill="#ABABAB"
                />
              </g>
              <defs>
                <clipPath id="clip0_162_3039">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        )}
      </div>
      <div className="text-black text-[13px] font-normal leading-[17.14px]">
        {postInfo.content}
      </div>
    </div>
  );
};

export default PostTemplateView;
