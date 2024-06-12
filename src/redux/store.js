// src/store.js
import { configureStore } from "@reduxjs/toolkit";
//reducers
import studentsReducer from "./reducers/studentsReducer";
import usersReducer from "./reducers/userReducer";
import facultiesReducer from "./reducers/facultiesReducer";
import secretariesReducer from "./reducers/secretariesReducer";

export const store = configureStore({
  reducer: {
    user: usersReducer,
    faculty: facultiesReducer,
    student: studentsReducer,
    secretary: secretariesReducer,
  },
});
