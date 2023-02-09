import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alert: null,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    alertDisplayer: (state, action) => {
      state.alert = action.payload;
    },
  },
});

export const { alertDisplayer } = formSlice.actions;

export default formSlice.reducer;
