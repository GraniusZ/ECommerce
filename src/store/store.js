import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { headerReducer } from "@modules/Header";

const rootReducer = combineReducers({
  header: headerReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
