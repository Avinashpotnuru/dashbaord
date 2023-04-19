import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: "1",
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState: initialState,
  reducers: {
    tabsHandle(state, action) {
      state.tabs = action.payload;
    },
  },
});

export const { tabsHandle } = tabsSlice.actions;
export default tabsSlice.reducer;
