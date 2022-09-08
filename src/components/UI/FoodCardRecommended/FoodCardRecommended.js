import React from 'react';
import styles from './FoodCardRecommended.module.css';
import { AddButton } from '../';

const FoodCardRecommended = ({ imgSrc, imgAlt, title, price }) => {
  return (
    <div className={styles.card}>
      <img className={styles['card-img-top']} src={imgSrc} alt={imgAlt} />
      <div className={styles['card-body']}>
        <h5 className={styles['card-title']}>{title}</h5>
        <div className={styles['card-body__bottom']}>
          <p className={styles['card-text']}>{price}</p>
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default FoodCardRecommended;
