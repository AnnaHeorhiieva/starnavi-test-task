import Container, { ContainerProps } from "@mui/material/Container";
import { styled } from "@mui/material/styles";

interface FieldsGridContainerProps extends ContainerProps {
  fieldSize: number;
}

export const FieldsGridContainer = styled(Container, {
  shouldForwardProp: (props) => props !== "fieldSize",
})<FieldsGridContainerProps>(({ fieldSize, theme }) => ({
  display: "grid",
  border: "1px solid #111",
  gridTemplateRows: `repeat(${fieldSize}, 1fr)`,
  gridTemplateColumns: `repeat(${fieldSize}, 1fr)`,
  marginBottom: "20px",
  [theme.breakpoints.up("sm")]: {
    marginBottom: "20px",
  },
}));
