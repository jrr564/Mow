import React from "react";
import "./NavBarChildren.css";
import { Container } from "semantic-ui-react";

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

export default NavBarChildren;
