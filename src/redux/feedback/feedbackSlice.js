import { createSlice } from '@reduxjs/toolkit';
import {
  addOwnReviewThunk,
  deleteOwnReviewThunk,
  editOwnReviewThunk,
  getAllReviewsThunk,
  getOwnReviewThunk,
} from './operationsF';

const initialState = {
  reviews: [],
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllReviewsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.reviews = [];
      })
      .addCase(getAllReviewsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(getAllReviewsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOwnReviewThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.reviews = [];
      })
      .addCase(getOwnReviewThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(getOwnReviewThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addOwnReviewThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.reviews = [];
      })
      .addCase(addOwnReviewThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews= action.payload;
      })
      .addCase(addOwnReviewThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editOwnReviewThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.reviews = [];
      })
      .addCase(editOwnReviewThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(editOwnReviewThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteOwnReviewThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.reviews = [];
      })
      .addCase(deleteOwnReviewThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(deleteOwnReviewThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const feedbackReducer = reviewsSlice.reducer;