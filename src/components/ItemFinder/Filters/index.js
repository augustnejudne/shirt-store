import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Type from './Type';
import Color from './Color';
import Size from './Size';
import Price from './Price';

const Filters = props => {
  return (
    <div className="filters-container">
      <Type />
      <Color />
      <Size />
      <Price />
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
)(Filters);
