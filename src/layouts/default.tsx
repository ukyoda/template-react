import React from "react";
import { Container } from "react-bootstrap";
import MainMenu from "../components/MainMenu";
import styled from "styled-components";

export interface LayoutProps {
  children: React.ReactNode;
}

const Body = styled.div`
  margin-top: 10px;
`;

export default (props: LayoutProps) => {
  const { children } = props;
  return (
    <div>
      <MainMenu />
      <Body>
        <Container>{children}</Container>
      </Body>
    </div>
  );
};
