'use client';

import { useState } from 'react';
import TabView from '@/components/home/tab/TabView';

interface TabProps {
  newQuestionCount: number;
  answeredQuestionCount: number;
}

const Tab = ({ newQuestionCount, answeredQuestionCount }: TabProps) => {
  const [isNewQuestionTabActive, setIsNewQuestionTabActive] =
    useState<boolean>(true);

  return (
    <TabView
      newQuestionCount={newQuestionCount}
      answeredQuestionCount={answeredQuestionCount}
      isNewQuestionTabActive={isNewQuestionTabActive}
      setIsNewQuestionTabActive={setIsNewQuestionTabActive}
    />
  );
};

export default Tab;
