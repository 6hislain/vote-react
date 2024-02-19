import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SettingsProp {
  id: string | number;
  key: string;
  value: string;
}

export interface AppState {
  settings?: SettingsProp[];
}

const initialState: AppState = {
  settings: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    clear: (state) => {
      state.settings = initialState.settings;
    },
    setSettings: (state, action: PayloadAction<SettingsProp[]>) => {
      state.settings = action.payload;
    },
  },
});

export const { clear, setSettings } = appSlice.actions;

export default appSlice.reducer;
