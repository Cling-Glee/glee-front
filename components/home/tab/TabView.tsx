'use client';

import { Dispatch, SetStateAction } from 'react';

interface TabViewProps {
  newQuestionCount: number;
  answeredQuestionCount: number;
  isNewQuestionTabActive: boolean;
  setIsNewQuestionTabActive: Dispatch<SetStateAction<boolean>>;
}

const TabView = ({
  newQuestionCount,
  answeredQuestionCount,
  isNewQuestionTabActive,
  setIsNewQuestionTabActive,
}: TabViewProps) => {
  const activeTabStyle = 'text-black text-sm border-b-2 border-black';
  const inActiveTabStyle = 'text-stone-400 text-sm';

  return (
    <div className="w-full h-11 flex justify-around">
      <button
        className={`w-full ${
          isNewQuestionTabActive ? activeTabStyle : inActiveTabStyle
        }`}
        onClick={() => setIsNewQuestionTabActive(true)}
      >
        새 질문 {newQuestionCount}
      </button>
      <button
        className={`w-full ${
          !isNewQuestionTabActive ? activeTabStyle : inActiveTabStyle
        }`}
        onClick={() => setIsNewQuestionTabActive(false)}
      >
        답변완료 {answeredQuestionCount}
      </button>
    </div>
  );
};

export default TabView;
