import React, { useState, useEffect } from "react";

import { AppMode } from "store/app-modes-state/types";
import { SelectChangeEvent } from "@mui/material/Select";

import { appModesStateSelectors } from "store/app-modes-state/selectors";
import { getAppModes, initialAppMode } from "store/app-modes-state/slice";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";

import ModeSelectButton from "./mode-select-button/mode-select-button";
import ModeSelectDropdown from "./mode-select-dropdown/mode-select-dropdown";
import { ModeSelectContainer } from "./mode-select.styles";

function ModeSelect() {
  const [selectedMode, setSelectedMode] = useState<AppMode>(initialAppMode);

  const dispatch = useAppDispatch();

  const { appModes } = appModesStateSelectors();
  const allModes = useAppSelector(appModes);

  function handleOptionChange(event: SelectChangeEvent<unknown>) {
    const chosenModeName = event.target.value;
    const filterModesCb = (mode: AppMode) => mode.name === chosenModeName;
    const [chosenMode] = allModes.filter(filterModesCb);
    setSelectedMode(chosenMode);
  }

  useEffect(() => {
    dispatch(getAppModes());
  }, [dispatch]);

  return (
    <ModeSelectContainer>
      <ModeSelectDropdown
        selectedOptionName={selectedMode.name}
        options={allModes}
        handleOptionChange={handleOptionChange}
      />
      <ModeSelectButton selectedMode={selectedMode} />
    </ModeSelectContainer>
  );
}

export default ModeSelect;
