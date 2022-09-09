import React from 'react';
import { Header, FoodContainer } from '../../components';
import Styles from './Home.module.css';

const Home = () => {
  return (
    <div className={Styles['bg-home']}>
      <Header />
      <FoodContainer />
    </div>
  );
};

export default Home;
