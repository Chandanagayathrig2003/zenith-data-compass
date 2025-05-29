
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  darkMode: boolean;
  sidebarOpen: boolean;
  widgetLayout: string[];
}

const initialState: UiState = {
  darkMode: false,
  sidebarOpen: true,
  widgetLayout: ['weather', 'news', 'finance'],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setWidgetLayout: (state, action: PayloadAction<string[]>) => {
      state.widgetLayout = action.payload;
    },
  },
});

export const { toggleDarkMode, toggleSidebar, setWidgetLayout } = uiSlice.actions;
export default uiSlice.reducer;
