/**
 * @fileoverview Layout of the application.
 */
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

