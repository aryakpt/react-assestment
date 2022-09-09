import React from 'react';
import { useHeaderContext } from '../../contexts';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  const { isHover } = useHeaderContext();
  return (
    <>
      <Navbar />
      <div style={{ padding: `${isHover ? '32px' : '64px'} 0px 0px 0px` }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
