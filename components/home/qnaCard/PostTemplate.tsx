'use client';

// import { useRouter } from 'next/navigation';
import { convertDate } from '@/utils';
import PostTemplateView from './PostTemplateView';

interface PostTemplateProps {
  postInfo: {
    profileImage: string | null;
    userName: string | null;
    content: string;
    date: Date;
  };
  isQuestion: boolean;
  containerStyles?: string;
}

const PostTemplate = ({
  postInfo,
  isQuestion,
  containerStyles,
}: PostTemplateProps) => {
  // const router = useRouter();

  const handleClickDMButton: React.MouseEventHandler = (e) => {
    e.stopPropagation();
  };
  const handleClickProfile: React.MouseEventHandler = (e) => {
    if (postInfo.userName) {
      // router.push(`/${postInfo.userName}`);
    }

    e.stopPropagation();
  };

  return (
    <PostTemplateView
      postInfo={{ ...postInfo, date: convertDate(postInfo.date) }}
      isQuestion={isQuestion}
      onClickDMButton={handleClickDMButton}
      onClickProfile={handleClickProfile}
      containerStyles={containerStyles}
    />
  );
};

export default PostTemplate;
