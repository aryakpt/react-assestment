import React from 'react';
import styles from './AddButton.module.css';
import { ic_add } from '../../../assets';

const AddButton = ({ onClick }) => {
  return (
    <button className={styles['add-button']} onClick={onClick}>
      <img src={ic_add} alt='icon-add' />
    </button>
  );
};

export default AddButton;
