import React from 'react';

const Item = props => {
  return (
    <div className="item">
      <div
        className="item-img"
        style={{ backgroundImage: `url(${props.item.img}), linear-gradient(white, white)` }}
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
      <div className="price">${props.item.price}</div>
    </div>
  );
};

export default Item;
