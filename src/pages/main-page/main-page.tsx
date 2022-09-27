import React, { useEffect } from "react";

import { appModesStateSelectors } from "store/app-modes-state/selectors";
import { createFields } from "helpers/utils";
import { setFields } from "store/fields-state/slice";
import { useAppSelector, useAppDispatch } from "store/redux-hooks";

import FieldsGrid from "components/fields-grid/fields-grid";
import HoverMessagesBody from "components/hover-messages-body/hover-messages-body";
import HoverMessagesHeader from "components/hover-messages-header/hover-messages-header";
import ModeSelect from "components/mode-select/mode-select";
import MuiThemeDecorator from "components/mui-theme-decorator/mui-theme-decorator";
import NoModeMessage from "components/no-mode-message/no-mode-message";
import {
  MainPageContainer,
  FieldsSectionContainer,
  HoverMessagesSectionContainer,
} from "./main-page.styles";

function MainPage() {
  const dispatch = useAppDispatch();

  const { currentAppMode } = appModesStateSelectors();
  const { name: fieldName, field: fieldSize } = useAppSelector(currentAppMode);

  useEffect(() => {
    const fieldsArr = createFields(fieldSize);
    dispatch(setFields(fieldsArr));
  }, [dispatch, fieldSize]);

  return (
    <MuiThemeDecorator>
      <MainPageContainer>
        <FieldsSectionContainer>
          <ModeSelect />
          {fieldName === "Pick mode" ? <NoModeMessage /> : <FieldsGrid />}
        </FieldsSectionContainer>
        <HoverMessagesSectionContainer>
          <HoverMessagesHeader />
          <HoverMessagesBody />
        </HoverMessagesSectionContainer>
      </MainPageContainer>
    </MuiThemeDecorator>
  );
}

export default MainPage;
