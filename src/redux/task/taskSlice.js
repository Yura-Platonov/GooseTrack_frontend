import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  editTask,
  getTasksByMonth,
  // getTasksByDay,
  // changeCategory,
} from './operations';
import { logout } from '../auth/operations';

const initialState = {
  monthTasks: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTasksByMonth.fulfilled, (state, { payload }) => {
        state.monthTasks = payload;
        // console.log(payload);
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        // Check if state.monthTasks is an array and push the payload into it
        if (Array.isArray(state.monthTasks)) {
          state.monthTasks.push(payload);
        } else {
          state.monthTasks = [payload]; // Initialize the array if it's not an array
        }
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.monthTasks = state.monthTasks.tasks.filter(
          (task) => task._id !== payload.id,
        );
      })
      .addCase(editTask.fulfilled, (state, { payload }) => {
        if (payload && payload.task) {
          state.monthTasks.tasks = state.monthTasks.tasks.map((task) =>
            task._id === payload.task._id ? payload.task : task,
          );
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.monthTasks = [];
        state.dayTasks = [];
      })
      .addMatcher(
        isAnyOf(
          addTask.pending,
          deleteTask.pending,
          editTask.pending,
          getTasksByMonth.pending,
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(
          addTask.rejected,
          deleteTask.rejected,
          editTask.rejected,
          getTasksByMonth.rejected,
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      )
      .addMatcher(
        isAnyOf(
          addTask.fulfilled,
          deleteTask.fulfilled,
          editTask.fulfilled,
          getTasksByMonth.fulfilled,
          // getTasksByDay.fulfilled,
          // changeCategory.fulfilled,
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        },
      );
  },
});

export const tasksReducer = tasksSlice.reducer;
