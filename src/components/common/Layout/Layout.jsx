import React from 'react';
import { Header } from 'components/common';
import { Footer } from 'components/common';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
