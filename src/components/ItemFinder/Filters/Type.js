import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions.js';

const Type = props => {
  const types = ['t-shirt', 'polo', 'sweat-shirt', 'long-sleeve', 'jacket'];

  const renderTypes = () => {
    return types.map((type, i) => (
      <label key={i}>
        <input type="checkbox" name={type} id={type} />
        {type}
      </label>
    ));
  };

  return (
    <div className="filter-section type-section bottom-border">
      <h4>Type:</h4>
      <div className="types-wrapper">{renderTypes()}</div>
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
)(Type);
