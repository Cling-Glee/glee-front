import Image from 'next/image';
import { convertDateToFormattedDate } from '@/utils';

interface PostTemplateViewProps {
  postInfo: {
    id?:number;
    profileImage: string | null;
    userName: string | null;
    content: string;
    date: Date;
  };
  isDMButtonNeeded: boolean;
  isAnswer: boolean;
  onClickDMButton: (e: React.MouseEvent) => void;
  onClickProfile?: (e: React.MouseEvent) => void;
}

const PostTemplateView = ({
  postInfo,
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
          <Image
            src={postInfo.profileImage || '/profile-icon.svg'}
            alt="profile image"
            width={32}
            height={32}
            className="w-8 h-8 bg-zinc-300 rounded-[10px] mr-2"
          />
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

        <span className="text-neutral-500 text-xs font-normal">
          {convertDateToFormattedDate(postInfo.date)}
        </span>
      </div>
      <div className="text-black text-[13px] font-normal leading-[17.14px]">
        {postInfo.content}
      </div>
    </div>
  );
};

export default PostTemplateView;
