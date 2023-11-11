import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const phoneBookApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  phoneBookApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = token => {
  phoneBookApi.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await phoneBookApi.post('users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await phoneBookApi.post('users/login', credentials);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    phoneBookApi.post('users/logout');
    clearToken();
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;
  if (!savedToken) {
    return thunkApi.rejectWithValue('Token is not existing');
  }
  try {
    setToken(savedToken);
    const { data } = await phoneBookApi.get('users/current');
    return data;
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});
