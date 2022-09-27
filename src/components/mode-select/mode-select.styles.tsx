import Container, { ContainerProps } from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export const ModeSelectContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  }),
);
