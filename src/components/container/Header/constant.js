import { FoodContainer } from '../../';
import { dummyData } from '../../../json';
console.log(dummyData);

export const breadCrumbLink = [
  {
    id: 1,
    label: 'Home',
    isCurrentPage: false,
    href: '#',
  },
  {
    id: 2,
    label: 'About',
    isCurrentPage: false,
    href: '#',
  },
  {
    id: 3,
    label: 'Bubur Yoyong',
    isCurrentPage: true,
    href: '#',
  },
];

export const scheduleMenuData = [
  {
    id: 1,
    onClick: () => {},
    label: '07.00-15.00',
  },
];

export const tabsData = [
  {
    label: 'Recommended',
    content: <FoodContainer dummyData={dummyData} />,
  },
  {
    label: 'Bubur',
    content: <FoodContainer dummyData={dummyData} />,
  },
  {
    label: 'Nasi',
    content: <FoodContainer dummyData={dummyData} />,
  },
  {
    label: 'Minuman',
    content: <FoodContainer dummyData={dummyData} />,
  },
];
