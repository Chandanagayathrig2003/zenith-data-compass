
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: string;
  category: string;
}

interface NewsState {
  articles: NewsArticle[];
  loading: boolean;
  error: string | null;
  selectedCategory: string;
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
  selectedCategory: 'general',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setArticles: (state, action: PayloadAction<NewsArticle[]>) => {
      state.articles = action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setLoading, setArticles, setError, setSelectedCategory } = newsSlice.actions;
export default newsSlice.reducer;
