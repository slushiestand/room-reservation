import { createStore } from 'redux';
import { rootReducer } from './reducers';
import middleware from './middleware';


export function initializeStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    middleware
  )
}

