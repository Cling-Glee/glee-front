import { useState } from 'react';
import { TReactions } from '@/types';
import QnaFooterView from '@/components/home/qnaCard/QnaFooterView';

interface QnaFooterProps {
  reactions: TReactions;
}
const QnaFooter = ({ reactions }: QnaFooterProps) => {
  const [isEmojiSpread, setIsEmojiSpread] = useState<boolean>(false);

  const handleClickSpreadButton = () => {
    setIsEmojiSpread((state) => !state);
  };
  const handleClickReaction = () => {
    // 각각의 reaction button의 id를 reaction name으로 설정하고,
    // e.currentTarget.id 을 통해 접근하여 요청을 진행

    setIsEmojiSpread(false);
  };

  const handleClickPinButton = () => {};
  const handleClickShareButton = () => {};
  const handleClickMoreButton = () => {};

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
