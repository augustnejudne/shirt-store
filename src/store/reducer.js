import { combineReducers } from 'redux';

import { SELECT_COLOR, SELECT_SIZE, FILTER } from './actions.js';

import tShirts from '../productsList/tShirts';
import poloShirts from '../productsList/poloShirts';
import sweatShirts from '../productsList/sweatShirts';
import longSleeves from '../productsList/longSleeves';
import jackets from '../productsList/jackets';

const initDisplayedShirts = tShirts.concat(poloShirts, sweatShirts, longSleeves, jackets);

const displayedShirts = (state = initDisplayedShirts, action) => {
  switch (action.type) {
    case FILTER:
      console.log(action.payload);
      return initDisplayedShirts.filter(
        e =>
          e.color.includes(action.payload.color) &&
          e.sizes.includes(action.payload.size) &&
          e.price >= action.payload.price.min &&
          e.price <= action.payload.price.max
      );
    default:
      return state;
  }
};

const filters = (
  state = { color: 'all', size: 'all', price: { min: 12, max: 20 } },
  action
) => {
  switch (action.type) {
    case SELECT_COLOR:
      return { ...state, color: action.payload };
    case SELECT_SIZE:
      return { ...state, size: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  displayedShirts,
  filters,
});

export default rootReducer;
