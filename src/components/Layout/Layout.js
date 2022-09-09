import React from 'react';
import { Navbar, Footer } from '../UI';

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
