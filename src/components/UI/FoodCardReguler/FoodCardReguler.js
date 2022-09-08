import React from 'react';
import styles from './FoodCardReguler.module.css';
import { AddButton } from '../';
import { imgDefault } from '../../../assets';

const FoodCardReguler = () => {
  return (
    <div className={styles.card}>
      <img className={styles['card-img']} src={imgDefault} alt={'asdsad'} />
      <div className={styles['card-body']}>
        <h6 className={styles['card-title']}>Bubur Sarang Telor Setengah</h6>
        <div className={styles['card-body__bottom']}>
          <p className={styles['card-text']}>32.00</p>
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default FoodCardReguler;
