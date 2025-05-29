
import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slices/weatherSlice';
import newsSlice from './slices/newsSlice';
import financeSlice from './slices/financeSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    news: newsSlice,
    finance: financeSlice,
    ui: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
