import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const getTasksByMonth = createAsyncThunk(
  'task/getTasksByMonth',
  async ({ year, month }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/api/task?year=${year}&month=${month}`,
      );
      return data;
    } catch (error) {
      Notify.failure(`There are no tasks for the selected period`);
      return rejectWithValue(error.message);
    }
  },
);

export const addTask = createAsyncThunk(
  'task/addTask',
  async (task, { rejectWithValue }) => {
    try {
      const response = await instance.post('/api/task', task);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  'task/deleteTask',
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`/api/task/${id}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const editTask = createAsyncThunk(
  'task/editTask',
  async ({ id, dataTask }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/api/task/${id}`, dataTask);
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

// export const changeCategory = createAsyncThunk(
//   'task/changeCategory',
//   async ({ id, categoryData }, thunkAPI) => {
//     try {
//       const response = await instance.patch(
//         `/api/task/category/${id}`,
//         categoryData,
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

// export const getTasksByDay = createAsyncThunk(
//   'task/getTasksByDay',
//   async ({ year, month, day }, { rejectedWithValue }) => {
//     try {
//       const { data } = await instance.get(
//         `/api/task/day/${year}-${month}-${day}`,
//       );
//       return data;
//     } catch (error) {
//       return rejectedWithValue(error.message);
//     }
//   },
// );
