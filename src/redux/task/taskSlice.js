import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addTask, deleteTask, editTask } from './operations';
import { logout } from '../auth/operations';

const initialState = {
  monthTasks: [],
  dayTasks: [],
  isLoading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.dayTasks.push(payload);
        state.monthTasks.push(payload);
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.dayTasks = state.dayTasks.filter(
          (task) => task._id !== payload.id,
        );
        state.monthTasks = state.monthTasks.filter(
          (task) => task._id !== payload.id,
        );
      })
      .addCase(editTask.fulfilled, (state, { payload }) => {
        state.dayTasks = state.dayTasks.map((task) =>
          task._id === payload._id ? payload : task,
        );
      })
      .addCase(logout.fulfilled, (state) => {
        state.monthTasks = [];
        state.dayTasks = [];
      })

      .addMatcher(
        isAnyOf(addTask.pending, deleteTask.pending, editTask.pending),
        (state) => {
          state.isLoading = false;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(addTask.rejected, deleteTask.rejected, editTask.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      )
      .addMatcher(
        isAnyOf(addTask.fulfilled, deleteTask.fulfilled, editTask.fulfilled),
        (state) => {
          state.isLoading = false;
          state.error = null;
        },
      );
  },
});

export const tasksReducer = tasksSlice.reducer;
