import Container, { ContainerProps } from "@mui/material/Container";
import Paper, { PaperProps } from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const HoverMessagesBodyContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: "100%",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "20px",
  }),
);

export const HoverMessageItem = styled(Paper)<PaperProps>(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  width: "100%",
  height: "50px",
  color: "#0F146E",
  fontSize: "0.8rem",
  fontWeight: "600",
  boxShadow: "none",
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.hoveredSquareMessage,
}));
