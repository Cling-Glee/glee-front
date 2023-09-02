'use client';

import PostTemplateView from '@/components/home/PostTemplateView';

// import { useRouter } from 'next/navigation';

interface PostTemplateProps {
  postInfo: {
    id?: number;
    profileImage: string | null;
    userName: string | null;
    content: string;
    date: Date;
  };
  isDMButtonNeeded: boolean;
  isAnswer: boolean;
}

const PostTemplate = ({
  postInfo,
  isDMButtonNeeded,
  isAnswer,
}: PostTemplateProps) => {
  // const router = useRouter();

  const handleClickProfile = (e: React.MouseEvent) => {
    if (postInfo.userName) {
      // router.push(`/${postInfo.userName}`);
    }

    e.stopPropagation();
  };

  const handleClickDMButton = (e: React.MouseEvent) => {
    if (postInfo.id) {
      // do something
    }

    e.stopPropagation();
  };

  return (
    <PostTemplateView
      postInfo={postInfo}
      isDMButtonNeeded={isDMButtonNeeded}
      isAnswer={isAnswer}
      onClickDMButton={handleClickDMButton}
      onClickProfile={handleClickProfile}
    />
  );
};

export default PostTemplate;
