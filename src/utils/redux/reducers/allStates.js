import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location');

const initialState = {
  allStates: {
    isLoading: false,
    showAlert: false,
    text: '',
    type: '',
    user: user ? JSON.parse(user) : null,
    token: token,
    userLocation: userLocation || '',
    jobLocation: userLocation || '',
  },
};

export const allStates = createSlice({
  name: 'allStates',
  initialState,
  reducers: {
    displayAlert: (state, action) => {
      state.allStates = {
        ...state.allStates,
        showAlert: true,
        text: action.payload.text,
        type: action.payload.type,
      };
    },
    hideAlert: state => {
      state.allStates = {
        ...state.allStates,
        showAlert: false,
        text: '',
        type: '',
      };
    },
    registerUser: (state, action) => {
      state.allStates = {
        ...state.allStates,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.userLocation,
        jobLocation: action.payload.jobLocation,
      };
    },
  },
});

export const { registerUser, displayAlert, hideAlert } = allStates.actions;

export default allStates.reducer;
