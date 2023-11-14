const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
} = require('./operations');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.user.name = '';
        state.user.email = '';
        state.token = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, (state, { payload }) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.pending, loginThunk.pending),
        (state, { payload }) => {
          state.error = payload;
        }
      )

      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.error = '';
        }
      );
  },
});

export const authReducer = authSlice.reducer;
