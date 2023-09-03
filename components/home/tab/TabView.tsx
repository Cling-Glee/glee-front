'use client';

interface TabViewProps {
  newQuestionCount: number;
  answeredQuestionCount: number;
  selectedTabId: string;
  onClickTab: (tabId: string) => void;
}

const TabView = ({
  newQuestionCount,
  answeredQuestionCount,
  selectedTabId,
  onClickTab,
}: TabViewProps) => {
  const activeTabStyle = 'text-black text-sm border-b-2 border-black';
  const inActiveTabStyle = 'text-stone-400 text-sm';

  return (
    <div className="w-full h-11 flex justify-around">
      <button
        className={`w-full ${
          selectedTabId === 'newQuestion' ? activeTabStyle : inActiveTabStyle
        }`}
        onClick={() => onClickTab('newQuestion')}
      >
        새 질문 {newQuestionCount}
      </button>
      <button
        className={`w-full ${
          selectedTabId === 'answeredQuestion'
            ? activeTabStyle
            : inActiveTabStyle
        }`}
        onClick={() => onClickTab('answeredQuestion')}
      >
        답변완료 {answeredQuestionCount}
      </button>
    </div>
  );
};

export default TabView;
