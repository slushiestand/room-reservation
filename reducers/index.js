import { combineReducers } from 'redux';
import check from './check'

const appReducer = combineReducers({
  check,

})

export const rootReducer = (state, action) => {
  
  return appReducer(state, action);
};