import React from 'react';
import { Badge, Breadcrumb, Menu, RatingBox } from '../../UI';
import { breadCrumbLink, scheduleMenuData } from './constant';
import { useHeaderContext } from '../../../contexts';

import './Header.css';
import '../../../App.css';

const Header = () => {
  const { isHover } = useHeaderContext();
  return (
    <>
      {isHover && (
        <section className={'header-container'}>
          <div className='header-wrapper'>
            <section className='restaurant-header'>
              <section>
                <Breadcrumb links={breadCrumbLink} />
              </section>
              <section className='header-content-wrapper'>
                <article className='flex flex-col gap-5'>
                  <header>
                    <h2 className='bold title-restaurant' style={{ fontSize: '36px' }}>
                      Bubur Yoyong
                    </h2>
                  </header>
                  <section className='header-attribute-wrapper'>
                    <Badge type='Top Seller' title='Star Merchant' />
                    <section className='flex align-items-center gap-2'>
                      <p className='text-schedule'>Open</p>
                      <Menu menus={scheduleMenuData} label={'07.00-15.00'} />
                    </section>
                    <section className='text-14px text-header-grey'>
                      <p>Breakfast | Jalan Magelang, Jetis, Yogyakarta</p>
                    </section>
                  </section>
                </article>
                <section>
                  <RatingBox rating={4.8} count={3000} />
                </section>
              </section>
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default Header;
