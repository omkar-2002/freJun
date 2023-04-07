import {createSlice} from '@reduxjs/toolkit';
import {getUsers, getExtraUsers} from './thunk';

const initialState = {
  users: [],
  usersLoading: null,
  error: '',
  currPage: 0,
  extraUserLoading: null,
};

const tab1Slice = createSlice({
  name: 'tab1',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.usersLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload.results;
      state.currPage = action.payload.info.page;
      state.usersLoading = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.payload;
      state.usersLoading = false;
    });
    builder.addCase(getExtraUsers.pending, (state, action) => {
      state.extraUserLoading = true;
    });
    builder.addCase(getExtraUsers.fulfilled, (state, action) => {
      state.users = state.users.concat(action.payload.results);
      state.currPage = action.payload.info.page;
      state.extraUserLoading = false;
    });
    builder.addCase(getExtraUsers.rejected, (state, action) => {
      state.error = action.payload;
      state.extraUserLoading = false;
    });
  },
});

export default tab1Slice.reducer;
