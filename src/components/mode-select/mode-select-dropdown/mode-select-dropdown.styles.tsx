import Select, { SelectProps } from "@mui/material/Select";
import { styled } from "@mui/material/styles";

export const ModeSelect = styled(Select)<SelectProps>(({ theme }) => ({
  width: "90%",
  marginRight: "20px",
}));
