import { createSlice } from "@reduxjs/toolkit";

const adminTabSlice = createSlice({
  name: "adminTab",
  initialState: {
    currentTab: "Projects",
  },
  reducers: {
    changeTab: (state, action) => {
      state.currentTab = action.payload;
      console.log("currentTab: ", state.currentTab);
    },
  },
});

export const { changeTab } = adminTabSlice.actions;
export default adminTabSlice.reducer;
