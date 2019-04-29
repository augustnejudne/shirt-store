import React, { Fragment } from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = props => {
  return (
    <Fragment>
      <Nav />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
