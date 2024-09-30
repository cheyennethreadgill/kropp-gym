// test if title passed through props will render correctly in component

import HeaderAccent from "./headerAccent";
import "@testing-library/dom";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

it("header title prop should render dynamically in the document", () => {
  render(<HeaderAccent title="x" />);

  const h2 = screen.getByRole("heading");

  expect(h2).toHaveTextContent("x");
});
