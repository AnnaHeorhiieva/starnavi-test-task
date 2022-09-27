import { RootState } from "store/store";

export const fieldsStateSelectors = () => {
  return {
    state: (state: RootState) => state.fields,
    fields: (state: RootState) => state.fields.fields,
    hoveredFields: (state: RootState) => state.fields.hoveredFields,
  };
};
