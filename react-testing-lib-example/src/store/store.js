import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter.reducer.js";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const createReduxStore = (initialState = {}) => {
  return configureStore({ reducer: rootReducer, preloadedState: initialState });
};
