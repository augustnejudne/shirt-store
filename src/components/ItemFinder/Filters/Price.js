import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Price = props => {
  const [price, setPrice] = useState({ min: 12, max: 20 });
  return (
    <div className="filter-section price-section bottom-border">
      <h4>Price:</h4>
      <div className="inputs-container">
        <InputRange
          maxValue={20}
          minValue={12}
          onChange={value => setPrice(value)}
          onChangeComplete={value =>
            props.filter(props.filters.color, props.filters.size, value)
          }
          value={price}
          formatLabel={value => ``}
        />
        <div className="minmax-container">
          <div className="min">
            min: <span>${price.min}</span>
          </div>
          <div className="max">
            max: <span>${price.max}</span>
          </div>
        </div>
      </div>
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
)(Price);
