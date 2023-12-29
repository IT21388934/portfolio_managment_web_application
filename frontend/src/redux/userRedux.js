import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isAuthenticating: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.isAuthenticating = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isAuthenticating = true;
      localStorage.setItem("userState", JSON.stringify(state));
      state.error = false;

      // console.log("currentUser: ", state.currentUser);
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.isAuthenticating = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
