import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
