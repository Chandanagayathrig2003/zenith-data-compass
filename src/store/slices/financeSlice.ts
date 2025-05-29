
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  high: number;
  low: number;
  chartData: Array<{
    date: string;
    price: number;
  }>;
}

interface FinanceState {
  stocks: Record<string, StockData>;
  loading: boolean;
  error: string | null;
  watchlist: string[];
}

const initialState: FinanceState = {
  stocks: {},
  loading: false,
  error: null,
  watchlist: ['AAPL', 'GOOGL', 'MSFT', 'TSLA'],
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setStockData: (state, action: PayloadAction<{ symbol: string; data: StockData }>) => {
      state.stocks[action.payload.symbol] = action.payload.data;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addToWatchlist: (state, action: PayloadAction<string>) => {
      if (!state.watchlist.includes(action.payload)) {
        state.watchlist.push(action.payload);
      }
    },
    removeFromWatchlist: (state, action: PayloadAction<string>) => {
      state.watchlist = state.watchlist.filter(symbol => symbol !== action.payload);
    },
  },
});

export const { setLoading, setStockData, setError, addToWatchlist, removeFromWatchlist } = financeSlice.actions;
export default financeSlice.reducer;
