import React from 'react';
import Filters from './Filters';
import ItemDisplay from './ItemDisplay';

const ItemFinder = props => {
  return (
    <section id="section-item-finder">
      <Filters />
      <ItemDisplay />
    </section>
  );
};


export default ItemFinder;
