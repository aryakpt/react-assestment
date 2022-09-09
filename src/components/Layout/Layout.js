import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '32px 0px 0px 0px' }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
