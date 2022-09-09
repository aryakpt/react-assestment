import React from 'react';
import { Header, FoodContainer } from '../../components';
import { dummyData } from '../../json';

const Home = () => {
  return (
    <div>
      <Header />
      <FoodContainer dummyData={dummyData} />
    </div>
  );
};

export default Home;
