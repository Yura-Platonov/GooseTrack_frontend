import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { THEME_OPTIONS } from './themeOptions';
import * as authOperations from '../auth/operations';

const { register, login, logout, refresh, updateUser } = authOperations;

const STORAGE_KEY = 'theme';

const initialState = { mode: THEME_OPTIONS.light };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    refreshTheme: (state) => {
      state.mode = localStorage.getItem(STORAGE_KEY);
    },
    setTheme: (state, { payload }) => {
      state.mode = payload;
      localStorage.setItem(STORAGE_KEY, payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        authOperations.endpoints.logoutUser.matchFulfilled,
        authOperations.endpoints.logoutUser.matchRejected,
      ),
      () => {
        localStorage.setItem(STORAGE_KEY, THEME_OPTIONS.light);
      },
    );
  },
});

export const { setTheme, refreshTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
