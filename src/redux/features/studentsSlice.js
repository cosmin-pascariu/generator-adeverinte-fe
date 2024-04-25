// src/features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    name: "Student",
    group: "Group",
    year: new Date().getFullYear(),
    email: "student@student.usv.ro",
  },
  reducers: {
    setStudents: (state, action) => {
      state.name = action.payload.name;
      state.group = action.payload.group;
      state.year = action.payload.year;
      state.email = action.payload.email;
    },
  },
});

export const { setStudents } = studentsSlice.actions;

export default studentsSlice.reducer;
