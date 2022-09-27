import { styled } from "@mui/material/styles";
import Container, { ContainerProps } from "@mui/material/Container";

interface FieldItemProps extends ContainerProps {
  isDefaultColor: boolean;
}

export const FieldItem = styled(Container, {
  shouldForwardProp: (props) => props !== "isDefaultColor",
})<FieldItemProps>(({ isDefaultColor, theme }) => ({
  backgroundColor: isDefaultColor
    ? theme.palette.background.defaultField
    : theme.palette.background.coloredField,
  aspectRatio: "1/1",
  border: "1px solid #111",
}));
