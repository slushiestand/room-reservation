import { combineReducers } from 'redux';
import check from './check'
import occupancyOfRoom from './occupancy'
import submit from './submit'

const appReducer = combineReducers({
  check,
  room1: occupancyOfRoom(1),
  room2: occupancyOfRoom(2),
  room3: occupancyOfRoom(3),
  room4: occupancyOfRoom(4),
  submit

})

export const rootReducer = (state, action) => {
  
  return appReducer(state, action);
};