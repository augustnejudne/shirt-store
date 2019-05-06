import React from 'react';
import { connect } from 'react-redux';
import Layout from './Layout/Layout';
import Feature from './Feature';
import ItemFinder from './ItemFinder';
import Cart from './Cart';

const Home = props => {
  return (
    <Layout>
      <div className="container">
        {props.cart.showCart && <Cart />}
        <Feature />
        <ItemFinder />
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
