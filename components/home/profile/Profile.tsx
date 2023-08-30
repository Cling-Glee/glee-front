'use client';

import ProfileView from '@/components/home/profile/ProfileView';

interface ProfileProps {
  profileImage: string | null;
  name: string;
  description: string;
  answeredQuestionCount: number;
  totalQuestionCount: number;
  followerCount: number;
}

const Profile = ({
  profileImage,
  name,
  description,
  answeredQuestionCount,
  totalQuestionCount,
  followerCount,
}: ProfileProps) => {
  const handleClickEditProfileButton = () => {
    // 프로필 편집
  };
  const handleClickFollowListButton = () => {
    // 팔로우 리스트 보기
  };

  return (
    <ProfileView
      profileImage={profileImage}
      name={name}
      description={description}
      answeredQuestionCount={answeredQuestionCount}
      totalQuestionCount={totalQuestionCount}
      followerCount={followerCount}
      onClickEditProfileButton={handleClickEditProfileButton}
      onClickFollowListButton={handleClickFollowListButton}
    />
  );
};

export default Profile;
