import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userObj: {
    userLocation: '',
    user: null,
    token: null,
    jobLocation: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.userObj = {
        userLocation: '',
        user: action.payload.user,
        token: action.payload.token,
        jobLocation: action.payload.jobLocation,
      };
    },
  },
});

export const { registerUser } = userSlice.actions;

export default userSlice.reducer;
