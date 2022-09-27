export interface Field {
  fieldName: string;
  isDefaultColor: boolean;
}

export type Fields = Field[];

export interface FieldsState {
  fields: Fields;
  hoveredFields: string[];
}
