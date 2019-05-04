import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions.js';

const Color = props => {
  const [selectedColor, setSelectedColor] = useState('');
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];


  const renderColors = () => {
    return colors.map((color, i) => (
      <div
        key={i}
        className={`color ${selectedColor === color ? 'selected-color' : null}`}
        onClick={() => {
          if (color === selectedColor) {
            setSelectedColor('all');
            props.selectColor('all');
            props.filter('all', props.filters.size, props.filters.price, props.filters.types);
            return;
          }
          setSelectedColor(color);
          props.selectColor(color);
          props.filter(color, props.filters.size, props.filters.price, props.filters.types);
        }}
      />
    ));
  };

  return (
    <div className="filter-section color-section bottom-border">
      <h4>Color:</h4>
      <div className="colors-wrapper">{renderColors()}</div>
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
)(Color);
