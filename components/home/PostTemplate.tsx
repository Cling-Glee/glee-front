'use client';

import PostTemplateView from '@/components/home/PostTemplateView';

// import { useRouter } from 'next/navigation';

interface PostTemplateProps {
  postInfo: {
    profileImage: string | null;
    userName: string | null;
    content: string;
    date: Date;
  };
  isQuestion: boolean;
  containerStyles?: string;
  onClickDMButton?: (e: React.MouseEvent) => void;
}

const PostTemplate = ({
  postInfo,
  isQuestion,
  containerStyles,
  onClickDMButton,
}: PostTemplateProps) => {
  // const router = useRouter();

  const handleClickProfile = (e: React.MouseEvent) => {
    if (postInfo.userName) {
      // router.push(`/${postInfo.userName}`);
    }

    e.stopPropagation();
  };

  return (
    <PostTemplateView
      postInfo={postInfo}
      isQuestion={isQuestion}
      onClickDMButton={onClickDMButton}
      onClickProfile={handleClickProfile}
      containerStyles={containerStyles}
    />
  );
};

export default PostTemplate;
