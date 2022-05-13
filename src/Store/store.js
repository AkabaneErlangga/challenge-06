import { configureStore } from "@reduxjs/toolkit";
import carCartSlice from "./carCartSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    carCartSlice: carCartSlice.reducer,
		user: userSlice.reducer,
  },
});

export default store;