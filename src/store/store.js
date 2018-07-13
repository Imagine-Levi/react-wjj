import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as home from './home/reducer';
import * as todolist from './todolist/reducer';
import * as table from './table/reducer';
import thunk from 'redux-thunk';

let store = createStore(
  combineReducers({...home, ...todolist, ...table}),
  applyMiddleware(thunk)
);

export default store;