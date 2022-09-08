import React from 'react';
import styles from './AddButton.module.css';
import { IconAdd } from '../../../assets';

const AddButton = ({ onClick }) => {
  return (
    <button className={styles['add-button']} onClick={onClick}>
      <img src={IconAdd} alt='icon-add' />
    </button>
  );
};

export default AddButton;
