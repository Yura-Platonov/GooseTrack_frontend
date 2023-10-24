import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isOpen: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen[action.payload.id] = action.payload.isOpen;
    },
  },
});

export const { setIsOpen } = modalSlice.actions;

export default modalSlice.reducer;
