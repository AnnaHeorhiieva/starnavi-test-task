import React from "react";

import { addIndexToString } from "helpers/utils";
import { fieldsStateSelectors } from "store/fields-state/selectors";
import { useAppSelector } from "store/redux-hooks";

import {
  HoverMessagesBodyContainer,
  HoverMessageItem,
} from "./hover-messages-body.styles";

function HoverMessagesBody() {
  const { hoveredFields } = fieldsStateSelectors();
  const hoveredFieldsMessages = useAppSelector(hoveredFields);

  return (
    <HoverMessagesBodyContainer>
      {hoveredFieldsMessages.map((hoveredFieldMessage, i) => {
        const key = addIndexToString(hoveredFieldMessage, i);
        return (
          <HoverMessageItem key={key}>{hoveredFieldMessage}</HoverMessageItem>
        );
      })}
    </HoverMessagesBodyContainer>
  );
}

export default HoverMessagesBody;
