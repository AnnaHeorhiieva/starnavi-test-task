import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { AppMode, AppModes, AppModesState } from "store/app-modes-state/types";

import axios from "services/axios";

export const initialAppMode = { name: "Pick mode", field: 5 };

const initialAppModesState = {
  appModes: [initialAppMode],
  currentAppMode: initialAppMode,
};

export const appModesState: AppModesState = initialAppModesState;

export const getAppModes = createAsyncThunk(
  "appModes/getAppModes",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://demo7919674.mockable.io");
      return data;
    } catch (err: any) {
      const rejectionError = err.response.data;
      return rejectWithValue(rejectionError);
    }
  },
);

const appModesSlice = createSlice({
  name: "appModes",
  initialState: appModesState,

  reducers: {
    setCurrentAppMode: (state, action: PayloadAction<AppMode>) => {
      const mode = action.payload;
      state.currentAppMode = mode;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      getAppModes.fulfilled,
      (state, action: PayloadAction<AppModes>) => {
        const appModes = action.payload;
        state.appModes = appModes;
      },
    );
  },
});

export const { setCurrentAppMode } = appModesSlice.actions;

export default appModesSlice.reducer;
