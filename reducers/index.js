import { combineReducers } from 'redux';
import login from './login'
import check from './check'

const appReducer = combineReducers({
  login,
  check

})

export const rootReducer = (state, action) => {
  
  return appReducer(state, action);
};