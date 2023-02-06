import { combineReducers } from "redux";
import { searchReducer } from "@modules/Header/slices/searchSlice";
import { drawerReducer } from "@modules/Header/slices/drawerSlice";
import { categoryReducer } from "@modules/Header/slices/categorySlice";

export const headerReducer = combineReducers({
  search: searchReducer,
  drawer: drawerReducer,
  category: categoryReducer,
});
