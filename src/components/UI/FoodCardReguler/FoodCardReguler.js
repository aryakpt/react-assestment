import React, { useState } from 'react';
import styles from './FoodCardReguler.module.css';
import { AddButton, FoodExpanded } from '../';

const FoodCardReguler = ({ imgSrc, imgAlt, title, price }) => {
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
        <img className={styles['card-img']} src={imgSrc} alt={imgAlt} />
        <div className={styles['card-body']}>
          <h6 className={styles['card-title']}>{title}</h6>
          <div className={styles['card-body__bottom']}>
            <p className={styles['card-text']}>{price}</p>
            <AddButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCardReguler;
