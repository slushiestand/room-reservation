import { combineReducers } from 'redux';
import check from './check'
import occupancy from './occupancy'

const appReducer = combineReducers({
  check,
  occupancy

})

export const rootReducer = (state, action) => {
  
  return appReducer(state, action);
};