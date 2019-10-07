import React from "react";
import { render } from "@testing/react-dom";
import App from "./App";

it("renders without crashing", () => {
  render(<App />);
});
