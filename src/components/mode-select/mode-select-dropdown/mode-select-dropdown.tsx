import React, { ReactNode } from "react";

import { AppModes } from "store/app-modes-state/types";
import { SelectChangeEvent } from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";
import { ModeSelect } from "./mode-select-dropdown.styles";

interface ModeSelectDropdownProps {
  selectedOptionName: string;
  options: AppModes;
  handleOptionChange: (e: SelectChangeEvent<unknown>) => void;
}

function ModeSelectDropdown({
  selectedOptionName,
  options,
  handleOptionChange,
}: ModeSelectDropdownProps) {
  return (
    <ModeSelect
      value={selectedOptionName}
      onChange={handleOptionChange}
      renderValue={(selected) => selected as ReactNode}
    >
      <MenuItem disabled value="Pick mode">
        Pick mode
      </MenuItem>
      {options.map((mode) => {
        const { name } = mode;
        return (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        );
      })}
    </ModeSelect>
  );
}

export default ModeSelectDropdown;
