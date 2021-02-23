import React from "react";
import logo from "../../assets/logo.svg";
import { App, AppHeader, AppLink, AppLogo } from "./styled";

function Example() {
  return (
    <App>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </AppLink>
      </AppHeader>
    </App>
  );
}

export default Example;
