import Image from 'next/image';
import { convertDateToFormattedDate } from '@/utils';

interface PostTemplateViewProps {
  postInfo: {
    profileImage: string | null;
    userName: string | null;
    content: string;
    date: Date;
  };
  isQuestion: boolean;
  onClickDMButton?: (e: React.MouseEvent) => void;
  onClickProfile?: (e: React.MouseEvent) => void;
  containerStyles?: string;
}

const PostTemplateView = ({
  postInfo,
  isQuestion,
  onClickDMButton,
  onClickProfile,
  containerStyles,
}: PostTemplateViewProps) => (
  <div className={`p-[12px] ${containerStyles}`}>
    <div className="flex items-center mb-2">
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
          className="rounded-full mr-2"
        />
        <span className="h-fit text-xs font-semibold mr-2">
          {postInfo.userName || '익명의 위스퍼'}
        </span>
        {isQuestion && (
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

export default PostTemplateView;
