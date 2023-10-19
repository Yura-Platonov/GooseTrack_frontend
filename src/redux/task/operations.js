import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goosetrack-backend-y622.onrender.com';

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
