import { Tabs as T, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';
import styles from './Tabs.module.css';

const Tabs = ({ data, isHeader }) => {
  const tabList = (
    <TabList className={styles['nav-food']}>
      {data.map((tab) => (
        <Tab
          key={tab.label}
          fontWeight='600'
          color='#828282'
          _selected={{ color: '#4B3786', borderBottom: '3px solid #E9AF53' }}
        >
          {tab.label}
        </Tab>
      ))}
    </TabList>
  );

  return (
    <>
      <T>
        {isHeader ? <div className={styles['tab-list-wrapper']}>{tabList}</div> : tabList}
        <TabPanels className={styles['nav-detail']}>
          {data.map((tab, index) => (
            <TabPanel p={0} key={index}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </T>
    </>
  );
};

export default Tabs;
