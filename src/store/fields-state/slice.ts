import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Field, Fields, FieldsState } from "store/fields-state/types";

const initialFieldsState = {
  fields: [],
  hoveredFields: [],
};

export const fieldsState: FieldsState = initialFieldsState;

const fieldsSlice = createSlice({
  name: "fields",
  initialState: fieldsState,
  reducers: {
    setFields: (state, action: PayloadAction<Fields>) => {
      const fields = action.payload;
      state.fields = fields;
    },
    setIsDefaultColor: (state, action: PayloadAction<Field>) => {
      const { fieldName, isDefaultColor } = action.payload;
      const index = state.fields.findIndex((f) => f.fieldName === fieldName);
      state.fields[index].isDefaultColor = isDefaultColor;
    },
    addHoveredField: (state, action: PayloadAction<string>) => {
      const hoveredField = action.payload;
      const hoveredFields = [hoveredField, ...state.hoveredFields];
      state.hoveredFields = hoveredFields;
    },
    setHoveredFields: (state, action: PayloadAction<string[]>) => {
      const hoveredFields = action.payload;
      state.hoveredFields = hoveredFields;
    },
  },
});

export const {
  setFields,
  setIsDefaultColor,
  addHoveredField,
  setHoveredFields,
} = fieldsSlice.actions;

export default fieldsSlice.reducer;
