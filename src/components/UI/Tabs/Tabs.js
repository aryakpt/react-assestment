import { Tabs as T, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';

const Tabs = ({ data }) => {
  return (
    <T>
      <TabList>
        {data.map((tab, index) => (
          <Tab
            key={index}
            fontWeight='600'
            color='#828282'
            _selected={{ color: '#4B3786', borderBottom: '2px solid #E9AF53' }}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((tab, index) => (
          <TabPanel p={4} key={index}>
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </T>
  );
};

export default Tabs;
