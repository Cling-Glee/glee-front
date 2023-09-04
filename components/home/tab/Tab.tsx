'use client';

import { useState } from 'react';
import TabView from '@/components/home/tab/TabView';

interface TabProps {
  newQuestionCount: number;
  answeredQuestionCount: number;
}

const Tab = ({ newQuestionCount, answeredQuestionCount }: TabProps) => {
  const [selectedTabId, setSelectedTabId] = useState<string>('newQuestion');

  const handleClickTab = (tabId: string) => {
    setSelectedTabId(tabId);
  };

  return (
    <TabView
      newQuestionCount={newQuestionCount}
      answeredQuestionCount={answeredQuestionCount}
      selectedTabId={selectedTabId}
      onClickTab={handleClickTab}
    />
  );
};

export default Tab;
