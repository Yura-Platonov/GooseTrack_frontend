import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  register,
  logout,
  refresh,
  updateUser,
  toggleTheme,
  } from './operations';

const initialState = {
  user: {},
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = payload.error;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = payload.error;
      })

     .addCase(logout.fulfilled, state => {
        state.user = {};
        state.token = '';
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(refresh.pending, state => {
        state.isLoading = true;
      })
      .addCase(refresh.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = payload;
        state.token = null;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(toggleTheme.fulfilled, (state, { payload }) => {
        // state.user.theme = !state.user.theme;
        state.user.theme = payload.theme;
        state.isLoading = false;
      })
      .addCase(toggleTheme.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(toggleTheme.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
   },
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.token = '';
    },
  },
  });