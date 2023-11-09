import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCurrentId } from './phoneBookSlice';

axios.defaults.baseURL = 'https://654a381ce182221f8d52bf6d.mockapi.io/';

export const fetchDataThunk = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (id, thunkApi) => {
    try {
      thunkApi.dispatch(setCurrentId);
      const { data } = await axios.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/add',
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post('contacts', body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'contacts/edit',
  async ({ id, name, number }, thunkApi) => {
    try {
      const { data } = await axios.put(`contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
