import { configureStore } from "@reduxjs/toolkit";

import appModesReducer from "store/app-modes-state/slice";
import fieldsReducer from "store/fields-state/slice";

export const store = configureStore({
  reducer: {
    appModes: appModesReducer,
    fields: fieldsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
