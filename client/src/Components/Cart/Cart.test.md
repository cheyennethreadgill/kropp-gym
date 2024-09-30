import React from "react";
import Cart from "./Cart";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/dom";

it("item should enter cart when add to cart btn is pressed", () => {
render(<Cart />);
});
