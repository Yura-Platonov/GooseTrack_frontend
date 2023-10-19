import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goosetrack-backend-y622.onrender.com';

const $api = axios.create({
  baseURL: 'https://goosetrack-backend-y622.onrender.com',
});

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, { rejectedWithValue }) => {
    try {
      const response = await $api.post('/api/tasks', task);
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, { rejectedWithValue }) => {
    try {
      const response = await $api.delete(`/api/tasks/${id}`);
      return response.data;
    } catch (error) {
      rejectedWithValue(error.message);
    }
  },
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async ({ id, task }, { rejectedWithValue }) => {
    try {
      const response = await $api.patch(`/api/tasks/${id}`, task);
      return response.data;
    } catch (error) {
      rejectedWithValue(error.message);
    }
  },
);
