import React from 'react';
import { Tabs } from '../../UI';
import { tabsData } from '../Header/constant';

const FoodContainer = () => {
  return (
    <main>
      <Tabs data={tabsData} />
    </main>
  );
};

export default FoodContainer;
