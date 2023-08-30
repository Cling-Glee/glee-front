import { useState } from 'react';
import { TReactions } from '@/types';
import QnaFooterView from './QnaFooterView';

interface QnaFooterProps {
  reactions: TReactions;
}
const QnaFooter = ({ reactions }: QnaFooterProps) => {
  const [isEmojiSpread, setIsEmojiSpread] = useState<boolean>(false);

  const handleClickSpreadButton = () => {
    setIsEmojiSpread((state) => !state);
  };
  const handleClickReaction: React.MouseEventHandler = (e) => {
    console.log(`${e.currentTarget.id} emoji clicked`);
    setIsEmojiSpread(false);
  };

  const handleClickPinButton = () => {
    console.log('pin button clicked');
  };
  const handleClickShareButton = () => {
    console.log('share button clicked');
  };
  const handleClickMoreButton = () => {
    console.log('more button clicked');
  };

  return (
    <QnaFooterView
      reactions={reactions}
      isEmojiSpread={isEmojiSpread}
      onClickSpreadButton={handleClickSpreadButton}
      onClickReaction={handleClickReaction}
      onClickPinButton={handleClickPinButton}
      onClickShareButton={handleClickShareButton}
      onClickMoreButton={handleClickMoreButton}
    />
  );
};

export default QnaFooter;
