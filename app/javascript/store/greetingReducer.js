import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const FetchGreeting = createAsyncThunk('greeting', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/messages');
  const greeting = response.data;
  console.log(greeting);
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    data: [],
    isFulfilled: false,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchGreeting.fulfilled, (state, action) => {
      state.isFulfilled = true;
      state.data = action.payload;
    });
  },
});

export default greetingSlice;
export { FetchGreeting };
