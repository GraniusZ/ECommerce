import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  searchVisible: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setVisible: (state, action) => {
      state.searchVisible = action.payload;
    },
  },
});

export const { setVisible } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
