import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Type from './Types';
import Color from './Colors';
import Size from './Sizes';
import Price from './Prices';

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
