import { FoodList } from '../../UI';
import { dummyData } from '../../../json';

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
    content: <FoodList dummyData={dummyData} />,
  },
  {
    label: 'Bubur',
    content: <FoodList dummyData={dummyData} />,
  },
  {
    label: 'Nasi',
    content: <FoodList dummyData={dummyData} />,
  },
  {
    label: 'Minuman',
    content: <FoodList dummyData={dummyData} />,
  },
];
