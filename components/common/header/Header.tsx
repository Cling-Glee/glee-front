'use client';

import { useState } from 'react';
import HeaderView from '@/components/common/header/HeaderView';

interface HeaderProps {
  isBookmarked?: boolean;
  hasBookmarkButton: boolean;
  hasShareButton: boolean;
}

const Header = ({ hasBookmarkButton, hasShareButton }: HeaderProps) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(true);

  const handleClickBookmarkButton = () => {
    setIsBookmarked((state) => !state);
    // 즐겨찾기
  };
  const handleClickShareButton = () => {
    // 공유하기
  };

  return (
    <HeaderView
      isBookmarked={isBookmarked}
      hasBookmarkButton={hasBookmarkButton}
      hasShareButton={hasShareButton}
      onClickBookmarkButton={handleClickBookmarkButton}
      onClickShareButton={handleClickShareButton}
    />
  );
};

export default Header;
