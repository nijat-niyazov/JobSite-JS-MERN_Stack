import { configureStore } from '@reduxjs/toolkit';
// import alertReducer from './reducers/alert';
// import userReducer from './reducers/user';
import allStateReducer from './reducers/allStates';

export const store = configureStore({
  reducer: {
    all: allStateReducer,
  },
});
