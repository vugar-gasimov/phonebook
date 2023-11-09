import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './PhoneBook/phoneBookSlice';
import { filterReducer } from './filterSlice';

const rootReducer = {
  contacts: phoneBookReducer,
  filter: filterReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
