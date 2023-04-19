import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onGoingTabs: { tabs: "1" },
};

const allTabs = createSlice({
  name: "allTabs",
  initialState: initialState,
  reducers: {
    onGoingTabsHandler(state, action) {
      state.tabs = action.payload;
    },
  },
});
export const { onGoingTabsHandler } = allTabs.actions;
export default allTabs.reducer;
