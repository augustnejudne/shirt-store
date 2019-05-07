import { combineReducers } from 'redux';

import {
  SELECT_COLOR,
  SELECT_SIZE,
  SELECT_PRICE,
  SELECT_TYPES,
  FILTER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SHOW_CART,
} from './actions.js';
import { min, max } from '../components/ItemFinder/Filters/Prices';

import tShirts from '../productsList/tShirts';
import poloShirts from '../productsList/poloShirts';
import sweatShirts from '../productsList/sweatShirts';
import longSleeves from '../productsList/longSleeves';
import jackets from '../productsList/jackets';

const initDisplayedShirts = tShirts.concat(
  poloShirts,
  sweatShirts,
  longSleeves,
  jackets
);

const displayedShirts = (state = initDisplayedShirts, action) => {
  switch (action.type) {
    case FILTER:
      console.log(action.payload);
      return initDisplayedShirts
        .filter(
          e =>
            e.color.includes(action.payload.color) &&
            e.sizes.includes(action.payload.size) &&
            e.price >= action.payload.price.min &&
            e.price <= action.payload.price.max &&
            action.payload.types.includes(e.type)
        )
        .sort((a, b) => a.price - b.price);
    default:
      return state;
  }
};

const filters = (
  state = {
    color: 'all',
    size: 'all',
    price: { min, max },
    types: ['t-shirt', 'polo', 'sweat-shirt', 'long-sleeve', 'jacket'],
  },
  action
) => {
  switch (action.type) {
    case SELECT_COLOR:
      return { ...state, color: action.payload };
    case SELECT_SIZE:
      return { ...state, size: action.payload };
    case SELECT_PRICE:
      return { ...state, price: action.payload };
    case SELECT_TYPES:
      return { ...state, types: action.payload };
    default:
      return state;
  }
};

export const cart = (state = { showCart: false, cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(e => e !== action.payload),
      };
    case SHOW_CART:
      return { ...state, showCart: !state.showCart };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  displayedShirts,
  filters,
  cart,
});

export default rootReducer;
