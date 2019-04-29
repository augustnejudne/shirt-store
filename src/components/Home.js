import React from 'react';
import Layout from './Layout/Layout';
import Feature from './Feature';
import ItemFinder from './ItemFinder';

const Home = props => {
  return (
    <Layout>
      <div className="container">
      <Feature />
      <ItemFinder />
      </div>
    </Layout>
  );
};

export default Home;
