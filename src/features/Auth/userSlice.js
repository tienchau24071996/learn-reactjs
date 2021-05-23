import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userAPi from 'api/userApi';

export const register = createAsyncThunk('user/register', async (payload) => {
  //call api to register
  const data = await userAPi.register(payload)

    //Save data to local storage
  localStorage.setItem('access_token',data.jwt)
  localStorage.setItem('access_token',JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
