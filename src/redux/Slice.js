import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      firstname: "",
      lastname: "",
      dateOfBirth: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
      language: "",
    },
    error: false,
    success: false,
    loading: false,
  },

  reducers: {
    setUserInfoStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
      state.error = false;
    },
    setUserInfoError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { setUserInfo, setUserInfoError, setUserInfoStart } =
  UserSlice.actions;

export default UserSlice.reducer;
