import Container, { ContainerProps } from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const HoverMessagesHeaderContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: "100%",
    height: "56px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }),
);

export const HoverMessagesHeaderText = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontWeight: theme.typography.h6.fontWeight,
    letterSpacing: "1px",
  }),
);
