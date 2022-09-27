import React, { MouseEvent, memo } from "react";

import { addHoveredField, setIsDefaultColor } from "store/fields-state/slice";
import { useAppDispatch } from "store/redux-hooks";

import { FieldItem } from "./field.styles";

interface FieldProps {
  fieldName: string;
  isDefaultColor: boolean;
}

function Field({ fieldName, isDefaultColor }: FieldProps) {
  const dispatch = useAppDispatch();

  function handleFieldMouseOver(event: MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    dispatch(setIsDefaultColor({ fieldName, isDefaultColor: !isDefaultColor }));
    dispatch(addHoveredField(fieldName));
  }

  return (
    <FieldItem
      onMouseEnter={handleFieldMouseOver}
      isDefaultColor={isDefaultColor}
    />
  );
}

export default memo(Field);
