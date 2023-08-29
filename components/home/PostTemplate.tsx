'use client';

import { useRouter } from 'next/navigation';
import PostTemplateView from './PostTemplateView';

interface PostTemplateProps {
  profileImage: string | null;
  userName: string | null;
  content: string;
  date: Date;
  isQuestion: boolean;
  containerStyles?: string;
}

const PostTemplate = ({
  profileImage,
  userName,
  content,
  date,
  isQuestion,
  containerStyles,
}: PostTemplateProps) => {
  const router = useRouter();

  const handleClickDMButton: React.MouseEventHandler = (e) => {
    e.stopPropagation();
  };
  const handleClickProfile: React.MouseEventHandler = (e) => {
    if (userName) {
      router.push(`/${userName}`);
    }
    e.stopPropagation();
  };

  const convertDate = (postedDate: Date) => {
    let converted = '';
    const diff = new Date().getTime() - postedDate.getTime();
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    const year = day * 365;

    if (diff / year >= 1) {
      converted = converted.concat(`${postedDate.getFullYear()}년 `);
    }
    if (diff / day <= 7) {
      if (diff / hour < 24) {
        if (diff / hour < 1) {
          if (diff / sec < 60) converted = `${Math.floor(diff / sec)}초 전`;
          else converted = `${Math.floor(diff / min)}분 전`;
        } else converted = `${Math.floor(diff / hour)}시간 전`;
      } else converted = `${Math.floor(diff / day)}일 전`;
    } else {
      converted = converted.concat(
        `${postedDate.getMonth() + 1}월 ${postedDate.getDate()}일`,
      );
    }
    return converted;
  };

  return (
    <PostTemplateView
      profileImage={profileImage}
      userName={userName}
      content={content}
      date={convertDate(date)}
      isQuestion={isQuestion}
      onClickDMButton={handleClickDMButton}
      onClickProfile={handleClickProfile}
      containerStyles={containerStyles}
    />
  );
};

export default PostTemplate;
