import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alert: {
    isLoading: false,
    showAlert: false,
    text: '',
    type: '',
  },
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    displayAlert: (state, action) => {
      state.alert = {
        isLoading: false,
        showAlert: true,
        text: action.payload.text,
        type: action.payload.type,
      };
    },
    hideAlert: state => {
      state.alert = {
        isLoading: false,
        showAlert: false,
        text: '',
        type: '',
      };
    },
  },
});

export const { alertDisplayer, displayAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
