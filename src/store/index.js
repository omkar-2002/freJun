import {configureStore, combineReducers} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import tab1Reducer from '../store/Tab1/slice';

const rootReducer = combineReducers({
  tab1: tab1Reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});

export default store;
