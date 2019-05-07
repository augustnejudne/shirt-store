import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export const min = 12;
export const max = 25;

const Price = props => {
  const [price, setPrice] = useState({ min, max });
  return (
    <div className="filter-section prices-section bottom-border">
      <h4>Price:</h4>
      <div className="inputs-container">
        <div className="minmax-container">
          <div className="min">
            min: <span>${price.min}</span>
          </div>
          <div className="max">
            max: <span>${price.max}</span>
          </div>
        </div>
        <InputRange
          minValue={min}
          maxValue={max}
          onChange={value => setPrice(value)}
          onChangeComplete={value => {
            props.selectPrice(value);
            props.filter(
              props.filters.color,
              props.filters.size,
              value,
              props.filters.types
            );
          }}
          value={price}
          formatLabel={value => ``}
        />
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
