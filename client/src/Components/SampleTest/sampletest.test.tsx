import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestApp from "./sampletest";

// test("add two numbers", () => {
//   expect(add(5, 3)).toBe(8);
// });

test('h1 should show "8"', () => {
  // Arrange
  render(<TestApp />);
  const headingText = screen.getByText(/Sum: /i);

  // Act

  // Assert
  expect(headingText).toHaveTextContent("Sum: 8");
});
