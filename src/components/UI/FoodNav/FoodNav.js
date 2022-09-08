import React from 'react';
import styles from './FoodNav.module.css';

const FoodNav = () => {
  return (
    <nav className={styles['food-nav']}>
      <div className={styles['food-nav__container']}>
        <ul className={`${styles.nav} ${styles['nav-pills']}`}>
          <li className={styles['nav-item']}>
            <a href='#recommended' className={`${styles['nav-link']} ${styles.active}`}>
              Recommended
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#bubur' className={`${styles['nav-link']}`}>
              Bubur
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#nasi' className={`${styles['nav-link']}`}>
              Nasi
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a href='#minuman' className={`${styles['nav-link']}`}>
              Minuman
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FoodNav;
