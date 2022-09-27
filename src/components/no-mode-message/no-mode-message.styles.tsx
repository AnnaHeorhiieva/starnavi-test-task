import Container, { ContainerProps } from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export const NoModeMessageContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    display: "grid",
    border: "1px solid #cae9ff",
    gridTemplateRows: `repeat(1fr)`,
    gridTemplateColumns: `repeat(1fr)`,
    backgroundColor: "#cae9ff",
    borderRadius: 4,
    overflow: "auto",
  }),
);

export const NoModeMessageText = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#0F146E",
    fontWeight: "600",
    fontFamily: theme.typography.fontFamily,
    padding: "20px",
  }),
);
