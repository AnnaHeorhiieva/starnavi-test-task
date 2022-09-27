declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    hoveredSquareMessage: string;
    button: string;
    coloredField: string;
    defaultField: string;
  }

  interface TypeAction {
    hoverButton: string;
  }

  interface Palette {
    neutralShade: { main: string };
  }

  interface PaletteOptions {
    neutralShade?: { main: string };
  }
}

export const muiThemeOptions = {
  palette: {
    background: {
      hoveredSquareMessage: "#fff9cf",
      button: "#151c95",
      coloredField: "#cae9ff",
      defaultField: "#fff",
    },
    action: {
      hoverButton: "#0f146e",
    },
  },
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    button: {
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 800,
    },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
          "@media (min-width: 600px)": {
            padding: 0,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#111",
          "&:hover": {
            backgroundColor: "#fff",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "0",
          padding: "0",
          "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #adb1ba",
          },
        },
      },
    },
  },
};
