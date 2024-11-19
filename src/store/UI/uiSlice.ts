import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  darkMode: boolean;
}

const initialState: UIState = {
  darkMode: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSwitch(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleSwitch } = uiSlice.actions;
export default uiSlice.reducer;