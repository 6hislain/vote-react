import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  id: string;
  exp: number;
  iat?: number;
  name: string;
  role: string;
  token: string;
  image?: string;
}

const initialState: AuthState = {
  id: "",
  exp: 0,
  iat: 0,
  name: "",
  role: "",
  token: "",
  image: "/avatar.png",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.id = initialState.id;
      state.exp = initialState.exp;
      state.iat = initialState.iat;
      state.name = initialState.name;
      state.role = initialState.role;
      state.token = initialState.token;
      state.image = initialState.image;
    },
    login: (state, action: PayloadAction<AuthState>) => {
      if (action.payload.id) state.id = action.payload.id;
      if (action.payload.exp) state.exp = action.payload.exp;
      if (action.payload.iat) state.iat = action.payload.iat;
      if (action.payload.name) state.name = action.payload.name;
      if (action.payload.role) state.role = action.payload.role;
      if (action.payload.token) state.token = action.payload.token;
      if (action.payload.image) state.image = action.payload.image;
    },
  },
});

export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
