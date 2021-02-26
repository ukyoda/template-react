import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Template</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
};
