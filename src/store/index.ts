import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";
import thunk from "redux-thunk";
import { userApi } from "@/services/user";
import { voteApi } from "@/services/vote";
import storage from "redux-persist/lib/storage";
import { defaultApi } from "@/services/default";
import { positionApi } from "@/services/position";
import { electionApi } from "@/services/election";
import { candidateApi } from "@/services/candidate";
import { setupListeners } from "@reduxjs/toolkit/query";
import appReducer, { AppState } from "@/store/slice/AppSlice";
import authReducer, { AuthState } from "@/store/slice/AuthSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export interface CombinedState {
  app?: AppState;
  auth?: AuthState;
}

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    blacklist: [
      userApi.reducerPath,
      voteApi.reducerPath,
      defaultApi.reducerPath,
      electionApi.reducerPath,
      positionApi.reducerPath,
      candidateApi.reducerPath,
    ],
  },
  combineReducers({
    app: appReducer,
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [voteApi.reducerPath]: voteApi.reducer,
    [defaultApi.reducerPath]: defaultApi.reducer,
    [positionApi.reducerPath]: positionApi.reducer,
    [electionApi.reducerPath]: electionApi.reducer,
    [candidateApi.reducerPath]: candidateApi.reducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      thunk,
      userApi.middleware,
      voteApi.middleware,
      defaultApi.middleware,
      electionApi.middleware,
      candidateApi.middleware,
      positionApi.middleware
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
