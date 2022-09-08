import React from 'react';
import { Badge, Breadcrumb, Menu, RatingBox, Tabs } from '../../UI';
import { breadCrumbLink, scheduleMenuData, tabsData } from './constant';
import './Header.css';
import '../../../App.css';

const Header = () => {
  return (
    <header className='restaurant-header'>
      <section>
        <Breadcrumb links={breadCrumbLink} />
      </section>
      <section className='flex space-between'>
        <section className='flex flex-col gap-5'>
          <h2 className='bold' style={{ fontSize: '36px' }}>
            Bubur Yoyong
          </h2>
          <section className='flex align-items-center gap-8'>
            <Badge type='Top Seller' title='Star Merchant' />
            <section className='flex align-items-center gap-2'>
              <p className='text-schedule'>Open</p>
              <Menu menus={scheduleMenuData} label={'07.00-15.00'} />
            </section>
            <section className='text-14px text-header-grey'>
              <p>Breakfast | Jalan Magelang, Jetis, Yogyakarta</p>
            </section>
          </section>
        </section>
        <section>
          <RatingBox rating={4.8} count={3000} />
        </section>
      </section>
      <section>
        <Tabs data={tabsData} />
      </section>
    </header>
  );
};

export default Header;
