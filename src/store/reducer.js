import { combineReducers } from 'redux';

import FIRST_ACTION from './actions.js';

const sampleState = (state = {}, action) => {
  switch(action.type) {
    case FIRST_ACTION:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  sampleState,
});

export default rootReducer;