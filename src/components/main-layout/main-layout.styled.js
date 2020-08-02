import { Grid } from "react-styled-flexboxgrid";
import styled from "styled-components";

export const Container = styled(Grid)`
  min-height: 100vh;
  display: flex;
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  background: ${({ background }) =>
    background && `url(${background}) no-repeat center center fixed;`}
  background-size: cover;
`;
