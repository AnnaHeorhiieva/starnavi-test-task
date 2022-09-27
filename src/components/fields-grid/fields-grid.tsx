import React from "react";

import { addIndexToString } from "helpers/utils";
import { appModesStateSelectors } from "store/app-modes-state/selectors";
import { fieldsStateSelectors } from "store/fields-state/selectors";
import { useAppSelector } from "store/redux-hooks";

import Field from "./field/field";
import { FieldsGridContainer } from "./fields-grid.styles";

function FieldsGrid() {
  const { currentAppMode } = appModesStateSelectors();
  const { field: fieldSize } = useAppSelector(currentAppMode);

  const { fields } = fieldsStateSelectors();
  const fieldsArray = useAppSelector(fields);

  return (
    <FieldsGridContainer fieldSize={fieldSize}>
      {fieldsArray.map((fieldObject, fieldObjectIndex) => {
        const { fieldName, isDefaultColor } = fieldObject;
        const key = addIndexToString(fieldName, fieldObjectIndex);
        return (
          <Field
            key={key}
            fieldName={fieldName}
            isDefaultColor={isDefaultColor}
          />
        );
      })}
    </FieldsGridContainer>
  );
}

export default FieldsGrid;
