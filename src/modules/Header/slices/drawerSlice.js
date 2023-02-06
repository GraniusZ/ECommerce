import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openedMenu: false,
};

export const drawerSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleDrawer: (state, action) => {
      state.openedDrawer = action.payload;
    },
  },
});

export const { toggleDrawer } = drawerSlice.actions;

export const drawerReducer = drawerSlice.reducer;
