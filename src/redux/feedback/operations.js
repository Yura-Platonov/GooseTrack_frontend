import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations.js';

export const getAllReviewsThunk = createAsyncThunk(
  'reviews/getAllReviewThunk',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('api/reviews/');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getOwnReviewThunk = createAsyncThunk(
  'reviews/getOwnReviewThunk',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('api/reviews/own');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addOwnReviewThunk = createAsyncThunk(
  'reviews/addOwnReviewThunk',
  async (userdata, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('api/reviews/own', userdata);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const editOwnReviewThunk = createAsyncThunk(
  'reviews/editOwnReviewThunk',
  async (userdata, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch('api/reviews/own', userdata);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteOwnReviewThunk = createAsyncThunk(
  'reviews/deleteOwnReviewThunk',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete('api/reviews/own');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
