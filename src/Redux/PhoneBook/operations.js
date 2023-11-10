import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCurrentId } from './phoneBookSlice';
import { phoneBookApi } from 'Redux/Auth/operations';

export const fetchDataThunk = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const { data } = await phoneBookApi.get('contacts');
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
      const { data } = await phoneBookApi.delete(`contacts/${id}`);
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
      const { data } = await phoneBookApi.post('contacts', body);
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
      const { data } = await phoneBookApi.put(`contacts/${id}`, {
        name,
        number,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
