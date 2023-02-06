import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openedCategory: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      state.openedCategory = action.payload;
    },
  },
});

export const { toggleCategory } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
