import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';


const ItemDisplay = props => {
  return (
    <div>
      <div className="items-wrapper">
        {
          props.displayedShirts.length > 0 ?
          props.displayedShirts.map((tShirt, i) => (
          <Item key={i} item={tShirt} />
        )) : <h3>No items to display</h3>
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({displayedShirts}) => {
  return {
    displayedShirts
  }
}

export default connect(mapStateToProps, null)(ItemDisplay);
