import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Size = props => {
  const [selectedSize, setSelectedSize] = useState('all');
  const sizes = ['all', 'xs', 's', 'm', 'l', 'xl'];

  const renderSizes = () => {
    return sizes.map((size, i) => (
      <div
        key={i}
        className={`size ${selectedSize === size ? 'selected-size' : null}`}
        onClick={() => {
          setSelectedSize(size);
          props.selectSize(size);
          props.filter(props.filters.color, size, props.filters.price, props.filters.types);
        }}
      >
        {size.toUpperCase()}
      </div>
    ));
  };

  return (
    <div className="filter-section sizes-section bottom-border">
      <h4>Size:</h4>
      <div className="sizes-container">{renderSizes()}</div>
    </div>
  );
};

const mapStateToProps = ({ filters }) => {
  return {
    filters,
  };
};

export default connect(
  mapStateToProps,
  actions
)(Size);
