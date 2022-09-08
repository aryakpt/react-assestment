import React from 'react';
import styles from './FoodExpanded.module.css';
import { ic_close } from '../../../assets';
import { AddButton } from '../';

import ReactDOM from 'react-dom';

const FoodExpanded = ({ imgSrc, imgAlt, title, price, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={onClose} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <Modal imgAlt={imgAlt} imgSrc={imgSrc} title={title} price={price} onClose={onClose} />,
        document.getElementById('modal-root'),
      )}
    </>
  );
};

const BackDrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

const Modal = ({ imgSrc, imgAlt, title, price, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles['modal-header']}>
        <img className={styles['modal-header__image']} src={imgSrc} alt={imgAlt} />
        <img
          className={styles['modal-close-icon']}
          src={ic_close}
          alt={'icon-close'}
          onClick={onClose}
        />
      </div>
      <div className={styles['modal-body']}>
        <div className={styles['modal-body__content']}>
          <h2 className={styles['modal-body__title']}>{title}</h2>
          <h2 className={styles['modal-body__price']}>{price}</h2>
        </div>
        <AddButton />
      </div>
    </div>
  );
};

export default FoodExpanded;
