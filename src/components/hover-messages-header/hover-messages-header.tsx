import React from "react";

import {
  HoverMessagesHeaderContainer,
  HoverMessagesHeaderText,
} from "./hover-messages-header.styles";

function HoverMessagesHeader() {
  return (
    <HoverMessagesHeaderContainer>
      <HoverMessagesHeaderText variant="h6">
        Hovered Squares
      </HoverMessagesHeaderText>
    </HoverMessagesHeaderContainer>
  );
}

export default HoverMessagesHeader;
