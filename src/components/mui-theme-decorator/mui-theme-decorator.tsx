import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { muiThemeOptions } from "helpers/configs";

interface MuiThemeDecoratorPropsTypes {
  children: ReactNode;
}

function MuiThemeDecorator({ children }: MuiThemeDecoratorPropsTypes) {
  const theme = createTheme(muiThemeOptions);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MuiThemeDecorator;
