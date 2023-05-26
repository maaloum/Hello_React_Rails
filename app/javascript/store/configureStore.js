import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetingReducer';

const store = configureStore({
  reducer: {
    home: greetingSlice.reducer,
  },
});

export default store;
