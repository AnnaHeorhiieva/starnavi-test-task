import { RootState } from "store/store";

export const appModesStateSelectors = () => {
  return {
    state: (state: RootState) => state.appModes,
    appModes: (state: RootState) => state.appModes.appModes,
    currentAppMode: (state: RootState) => state.appModes.currentAppMode,
  };
};
