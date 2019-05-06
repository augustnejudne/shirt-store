import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const CartItem = props => {
  const { item } = props;
  return (
    <div className="cart-item">
      <div
        className="cart-item-img"
        style={{ backgroundImage: `url(${item.img})` }}
      />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        {item.sizes.map((size, i) => {
          return (
            size !== 'all' && (
              <div key={i} className="cart-item-sizes-wrapper">
                <p>{size}</p>
                <input type="number" min="0" max="99" placeholder="0" />
              </div>
            )
          );
        })}
        <div className="spacer" />
        <p className="remove-cart-item" onClick={() => props.removeFromCart(item)}>Remove</p>
      </div>
    </div>
  );
};

export default connect(null, actions)(CartItem);
