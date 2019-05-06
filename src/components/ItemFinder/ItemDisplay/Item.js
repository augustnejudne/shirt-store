import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Item = props => {
  const inCart = props.cart.cartItems.includes(props.item);

  return (
    <div className="item">
      <div
        className="item-img"
        style={{
          backgroundImage: `url(${props.item.img}),
          linear-gradient(white, white)`,
        }}
      />
      <h4 className="item-name">{props.item.name}</h4>
      <div className="sizes-list">
        <span>Sizes: </span>
        {props.item.sizes.map(
          (size, i) =>
            size !== 'all' && (
              <strong key={i} className="size-tag">
                {size}
              </strong>
            )
        )}
      </div>
      <div className="price-add-to-cart-wrapper">
        <div className="price">${props.item.price}</div>
        <button className={inCart ? 'red-button' : 'green-button'} onClick={() => {
          !inCart ?
          props.addToCart(props.item) :
          props.removeFromCart(props.item);
        }}>
          {inCart ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(
  mapStateToProps,
  actions
)(Item);
