import { Field, Fields } from "store/fields-state/types";

import { addIndexToString } from "./add-index-to-string";

export function createSameValuesArray(
  arrayLength: number,
  elValue: string,
): string[] {
  const sameValuesArray = new Array(arrayLength).fill(elValue);
  return sameValuesArray;
}

export function createFields(fieldSize: number): Fields {
  const rowsArray = createSameValuesArray(fieldSize, "row");
  const columnsArray = createSameValuesArray(fieldSize, "column");

  const fields: Field[] = [];

  rowsArray.forEach((row, rowIndex) => {
    const rowName = addIndexToString(row, rowIndex);
    columnsArray.forEach((column, columnIndex) => {
      const columnName = addIndexToString(column, columnIndex);
      const fieldName = `${rowName} ${columnName}`;
      const field = { fieldName, isDefaultColor: true };
      fields.push(field);
    });
  });

  return fields;
}
