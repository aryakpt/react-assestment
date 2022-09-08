import React from 'react';

import './RatingBox.css';

const RatingBox = ({ rating, count }) => {
  return (
    <div className='rating-box-container'>
      <section className='star-rating'>
        <img src='/icons/ic_star.svg' alt='star' />
        <p>{rating}</p>
      </section>
      <section>
        <p className='text-14px text-grey'>{count / 1000}k+ ratings</p>
      </section>
    </div>
  );
};

export default RatingBox;
