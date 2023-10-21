import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



export const instance = axios.create({
  baseURL: 'https://goosetrack-backend-y622.onrender.com',
});

export const setToken = (token) => {
  instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers['Authorization'] = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instance.post('api/auth/register', credentials);
      setToken(response.data.token);
      Notify.success(`Welcome!!!`);
      return response.data;
    } catch (error) {
      Notify.failure(`This email is already in use`);
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instance.post('api/auth/login', credentials);
      setToken(response.data.token);
      Notify.success(`Welcome back!!!`);
      return response.data;
    } catch (error) {
      Notify.failure(`Login failed. Try again`);
      return rejectWithValue(error.message);
    }
  }
);


export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await instance.post('api/auth/logout');
      clearToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh/fetchCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    if (!token) {
      return rejectWithValue('Oooops... Cannot refresh user');
    }
    try {
      setToken(token);
      const { data } = await instance.get('api/auth/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch('api/auth/update', credentials);
      Notify.success(`Your profile has been updated`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
