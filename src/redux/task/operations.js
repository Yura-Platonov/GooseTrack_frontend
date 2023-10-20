import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goosetrack-backend-y622.onrender.com';

export const getTasksByMonth = createAsyncThunk(
  'task/getTasksByMonth',
  async ({ year, month }, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get(`/api/task/month/${year}-${month}`);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  },
);

export const getTasksByDay = createAsyncThunk(
  'task/getTasksByDay',
  async ({ year, month, day }, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get(`/api/task/day/${year}-${month}-${day}`);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  },
);

export const addTask = createAsyncThunk(
  'task/addTask',
  async (task, { rejectedWithValue }) => {
    try {
      const response = await axios.post('/api/task', task);
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  'task/deleteTask',
  async (id, { rejectedWithValue }) => {
    try {
      const response = await axios.delete(`/api/task/${id}`);
      return response.data;
    } catch (error) {
      rejectedWithValue(error.message);
    }
  },
);

export const editTask = createAsyncThunk(
  'task/editTask',
  async ({ id, task }, { rejectedWithValue }) => {
    try {
      const response = await axios.patch(`/api/task/${id}`, task);
      return response.data;
    } catch (error) {
      rejectedWithValue(error.message);
    }
  },
);

export const changeCategory = createAsyncThunk(
  'task/changeCategory',
  async ({ id, categoryData }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/api/task/category/${id}`,
        categoryData,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
