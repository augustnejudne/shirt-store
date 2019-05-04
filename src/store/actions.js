import { min, max } from '../components/ItemFinder/Filters/Price';

export const SELECT_COLOR = 'SELECT_COLOR';
export const SELECT_SIZE = 'SELECT_SIZE';
export const SELECT_TYPES = 'SELECT_TYPES';
export const SELECT_PRICE = 'SELECT_PRICE';
export const FILTER = 'FILTER';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export const selectColor = color => ({
  type: SELECT_COLOR,
  payload: color,
});

export const selectSize = size => ({
  type: SELECT_SIZE,
  payload: size,
});

export const selectPrice = price => ({
  type: SELECT_PRICE,
  payload: price
})

export const selectTypes = types => ({
  type: SELECT_TYPES,
  payload: types,
})

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item,
})

export const removeFromCart = item => ({
  type: REMOVE_FROM_CART,
  payload: item
})

export const filter = (
  color = 'all',
  size = 'all',
  price = { min, max },
  types = ['t-shirt', 'polo', 'sweat-shirt', 'long-sleeve', 'jacket']
) => ({
  type: FILTER,
  payload: { color, size, price, types },
});
