import React from "react";

import { AppMode } from "store/app-modes-state/types";

import { appModesStateSelectors } from "store/app-modes-state/selectors";
import { createFields } from "helpers/utils";
import { setCurrentAppMode } from "store/app-modes-state/slice";
import { setFields, setHoveredFields } from "store/fields-state/slice";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";

import { ModeButton } from "./mode-select-button.styles";

interface ModeSelectButtonProps {
  selectedMode: AppMode;
}

function ModeSelectButton({ selectedMode }: ModeSelectButtonProps) {
  const dispatch = useAppDispatch();

  const { currentAppMode } = appModesStateSelectors();
  const { field } = useAppSelector(currentAppMode);
  const fieldsArray = createFields(field);

  function handleModeButtonClick() {
    dispatch(setCurrentAppMode(selectedMode));
    dispatch(setFields(fieldsArray));
    dispatch(setHoveredFields([]));
  }

  return (
    <ModeButton variant="contained" onClick={handleModeButtonClick}>
      START
    </ModeButton>
  );
}

export default ModeSelectButton;
