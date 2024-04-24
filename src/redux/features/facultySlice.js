// src/features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const facultySlice = createSlice({
  name: "faculty",
  initialState: {
    fullname: "Facultatea de Informatica",
    shortname: "FII",
    year: 2021,
    decan: "Popescu Ion",
    secretar: "Ionescu Maria",
  },
  reducers: {
    setFaculty: (state, action) => {
      state.fullname = action.payload.fullname;
      state.shortname = action.payload.shortname;
      state.year = action.payload.year;
      state.decan = action.payload.decan;
      state.secretar = action.payload.secretar;
    },
  },
});

export const { setFaculty } = facultySlice.actions;

export default facultySlice.reducer;
