import { Tabs as T, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';
import styles from './Tabs.module.css';

const Tabs = ({ data }) => {
  return (
    <>
      <T>
        <TabList className={styles['nav-food']}>
          {data.map((tab, index) => (
            <Tab
              key={index}
              fontWeight='600'
              color='#828282'
              _selected={{ color: '#4B3786', borderBottom: '3px solid #E9AF53' }}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
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
