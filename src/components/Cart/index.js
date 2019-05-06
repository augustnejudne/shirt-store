import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import CartItem from './CartItem';

const Cart = props => {
  const { cartItems } = props.cart;
  return (
    <div className="cart-wrapper">
      <div className="cart-dark-bg" onClick={() => props.showCart()} />
      <div className="cart">
        <h3>Cart</h3>
        <span className="close-button" onClick={() => props.showCart()}>&times;</span>
        <ul>
          {
            cartItems.length < 1 ? 
              <h3 className="cart-is-empty">Your cart is empty!</h3>
            :
            cartItems.map((item, i) => (
            <CartItem key={i} item={item} />
          ))
          }
        </ul>
        <button>Place Order</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps, actions)(Cart);
