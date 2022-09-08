import React, { useState } from 'react';
import styles from './FoodCardRecommended.module.css';
import { AddButton, FoodExpanded } from '../';

const FoodCardRecommended = ({ imgSrc, imgAlt, title, price }) => {
  const [isShow, setIsShow] = useState(false);

  const onShowHandler = () => {
    setIsShow(true);
  };

  const onCloseHandler = () => {
    setIsShow(false);
  };

  return (
    <>
      {isShow && (
        <FoodExpanded
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          title={title}
          price={price}
          onClose={onCloseHandler}
        />
      )}
      <div className={styles.card} onClick={onShowHandler}>
        <img className={styles['card-img-top']} src={imgSrc} alt={imgAlt} />
        <div className={styles['card-body']}>
          <h5 className={styles['card-title']}>{title}</h5>
          <div className={styles['card-body__bottom']}>
            <p className={styles['card-text']}>{price}</p>
            <AddButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCardRecommended;
