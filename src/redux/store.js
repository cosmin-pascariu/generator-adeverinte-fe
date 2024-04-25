// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import facultyReducer from "./features/facultySlice";
import studentsReducer from "./features/studentsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    faculty: facultyReducer,
    students: studentsReducer,
  },
});
