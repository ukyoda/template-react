import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const StyledLink = styled(Nav.Link)``;

export default () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Template</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav navbar className="mr-auto">
            <LinkContainer exact to="/">
              <StyledLink>TOP画面</StyledLink>
            </LinkContainer>
            <LinkContainer exact to="/counter">
              <StyledLink>カウンタ</StyledLink>
            </LinkContainer>
            <LinkContainer exact to="/example">
              <StyledLink>サンプルページ</StyledLink>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
