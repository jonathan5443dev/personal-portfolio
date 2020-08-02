import React from "react";
import PropTypes from "prop-types";
import { Container } from "./main-layout.styled";

const MainLayout = ({ children, background }) => {
  return (
    <Container fluid={true} background={background}>
      {children}
    </Container>
  );
};

MainLayout.propTypes = {
  background: PropTypes.string
};

MainLayout.defaultProps = {
  background: null
};

export default MainLayout;
