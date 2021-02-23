import React from "react";
import { render, screen } from "@testing-library/react";
import Example from "./Example";

describe("<Example />", () => {
  it("renders learn react link", () => {
    render(<Example />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
