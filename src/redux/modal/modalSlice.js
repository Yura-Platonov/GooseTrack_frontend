import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isOpen: false,
// };

// const modalSlice = createSlice({
//   name: 'modal',
//   initialState,
//   reducers: {
//     openModal: (state, action) => {
//       state.isOpen = true;
//     },
//     closeModal: (state, action) => {
//       state.isOpen = false;
//     },
//   },
// });

// export const { openModal, closeModal } = modalSlice.actions;
// export default modalSlice.reducer;

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
