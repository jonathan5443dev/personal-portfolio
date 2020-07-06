import React from "react";
import { Container } from "./main-layout.styled";

const MainLayout = ({ children }) => {
  return <Container fluid={true}>{children}</Container>;
};

export default MainLayout;
