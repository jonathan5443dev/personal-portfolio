import { Grid } from "react-styled-flexboxgrid";
import styled from "styled-components";

export const Container = styled(Grid)`
  min-height: 100vh;
  display: flex;
  padding-bottom: ${({ theme }) => theme.spacing(3)};
`;
