import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./slices/profileSlice";
// import contactReducer from "./slices/contactSlice";

export const store = configureStore({
  reducer: {
    profile: articleReducer,
    // contacts: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
