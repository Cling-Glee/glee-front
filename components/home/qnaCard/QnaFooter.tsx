import { useState } from 'react';
import { TReactions } from '@/types';
import QnaFooterView from '@/components/home/qnaCard/QnaFooterView';

interface QnaFooterProps {
  reactions: TReactions;
}

const separateReactions = (reactions: TReactions) => {
  const rv: {
    clickedReactions: {
      [key: string]: number;
    };
    unClickedReactions: {
      [key: string]: number;
    };
  } = {
    clickedReactions: {},
    unClickedReactions: {},
  };
  Object.entries(reactions).forEach(([key, value]) => {
    if (value > 0) rv.clickedReactions[key] = value;
    else rv.unClickedReactions[key] = value;
  });
  return rv;
};

const QnaFooter = ({ reactions }: QnaFooterProps) => {
  const [isEmojiSpread, setIsEmojiSpread] = useState<boolean>(false);

  const { clickedReactions, unClickedReactions } = separateReactions(reactions);

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
      clickedReactions={clickedReactions}
      unClickedReactions={unClickedReactions}
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
