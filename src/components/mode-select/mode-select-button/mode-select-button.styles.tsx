import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const ModeButton = styled(Button)<ButtonProps>(({ theme }) => ({
  height: "56px",
  width: "100px",
  borderRadius: 4,
  backgroundColor: theme.palette.background.button,
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.action.hoverButton,
  },
}));
