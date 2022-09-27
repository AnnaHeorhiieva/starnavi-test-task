export interface AppMode {
  name: string;
  field: number;
}

export type AppModes = AppMode[];

export interface AppModesState {
  appModes: AppModes;
  currentAppMode: AppMode;
}
