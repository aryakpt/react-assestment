import React from 'react';
import { Tabs } from '../../UI';
import { tabsData } from '../Header/constant';

const FoodContainer = () => {
  return (
    <main>
      <Tabs data={tabsData} isHeader />
    </main>
  );
};

export default FoodContainer;
