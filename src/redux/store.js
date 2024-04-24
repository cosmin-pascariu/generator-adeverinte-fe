// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import facultyReducer from "./features/facultySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    faculty: facultyReducer,
  },
});
