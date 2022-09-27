import Container, { ContainerProps } from "@mui/material/Container";
import { styled } from "@mui/material/styles";

export const MainPageContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "100%",
    },
  }),
);

export const FieldsSectionContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: "50%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "30px 3% 0 3%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "30px 3% 0 3%",
    },
  }),
);

export const HoverMessagesSectionContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    width: "50%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "30px 3% 0 3%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "80%",
      height: "50vh",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "30px 3% 0 3%",
    },
  }),
);
