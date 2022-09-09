import React from 'react';
import styles from './FoodContainer.module.css';

import { FoodCardRecommended, FoodCardReguler } from '../../';

const FoodContainer = ({ dummyData }) => {
  return (
    <section className={styles.food}>
      <div className={styles['food__container']}>
        <article className={styles['food-recommended']}>
          <h2 className={styles['food__title']}>Recommended</h2>
          <div className={styles['food-recommended__list']}>
            {dummyData.recommended.map((data) => {
              return (
                <FoodCardRecommended
                  key={data.id}
                  imgSrc={data.image}
                  imgAlt={data.title}
                  title={data.title}
                  price={data.price}
                />
              );
            })}
          </div>
        </article>
        <article className={styles['food-porridge']}>
          <h2 className={styles['food__title']}>Bubur</h2>
          <div className={styles['food-porridge__list']}>
            {dummyData.porridge.map((data) => {
              return (
                <FoodCardReguler
                  key={data.id}
                  imgSrc={data.image}
                  imgAlt={data.title}
                  title={data.title}
                  price={data.price}
                />
              );
            })}
          </div>
        </article>
        <article className={styles['food-rice']}>
          <h2 className={styles['food__title']}>Nasi</h2>
          <div className={styles['food-rice__list']}>
            {dummyData.rice.map((data) => {
              return (
                <FoodCardReguler
                  key={data.id}
                  imgSrc={data.image}
                  imgAlt={data.title}
                  title={data.title}
                  price={data.price}
                />
              );
            })}
          </div>
        </article>
        <article className={styles['food-baverage']}>
          <h2 className={styles['food__title']}>Minuman</h2>
          <div className={styles['food-baverage__list']}>
            {dummyData.baverage.map((data) => {
              return (
                <FoodCardReguler
                  key={data.id}
                  imgSrc={data.image}
                  imgAlt={data.title}
                  title={data.title}
                  price={data.price}
                />
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default FoodContainer;
