import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import adminTabReducer from "./adminTabRedux";

// import store from "./store";
const persistedAuthState = localStorage.getItem("userState");
const preloadedState = persistedAuthState ? JSON.parse(persistedAuthState) : {};

const store = configureStore({
  reducer: {
    user: userReducer,
    adminTab: adminTabReducer,
    // other reducers
  },
  preloadedState,
});

export default store;
// export let persistor = persistStore(store);
