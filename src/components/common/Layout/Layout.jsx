import React from 'react';
import { Header } from 'common/Header';
import Footer from 'common/Footer/Footer';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
