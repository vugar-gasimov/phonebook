const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const { registerThunk, loginThunk, logoutThunk } = require('./operations');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        return (state = initialState);
      });
  },
});

export const authReducer = authSlice.reducer;
