import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import trackListReducer from '../reducers/trackListReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Music: trackListReducer
  },
});
