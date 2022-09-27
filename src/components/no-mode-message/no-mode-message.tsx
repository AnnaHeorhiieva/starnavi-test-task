import React from "react";

import {
  NoModeMessageContainer,
  NoModeMessageText,
} from "./no-mode-message.styles";

function NoModeMessage() {
  return (
    <NoModeMessageContainer>
      <NoModeMessageText>
        Please choose app mode and press START
      </NoModeMessageText>
    </NoModeMessageContainer>
  );
}

export default NoModeMessage;
