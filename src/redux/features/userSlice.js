// src/features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    picture: null,
    type: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName;
      state.picture = action.payload.picture;
      state.type = action.payload.type;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userName = null;
      state.picture = null;
      state.type = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
