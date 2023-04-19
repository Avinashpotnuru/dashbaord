import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  display: "",
};

const counterSlice = createSlice({
  name: `counter`,
  initialState: initialState,
  reducers: {
    incrementCount(state, action) {
      state.count = state.count + 1;
    },
    displayName(state, action) {
      state.display = action.payload;
    },
  },
});

export const { incrementCount: incrementCount, displayName } =
  counterSlice.actions;
export default counterSlice.reducer;
