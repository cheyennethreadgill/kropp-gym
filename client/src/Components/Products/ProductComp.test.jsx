import React from "react";
import Cart from "./ProductComp";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/dom";
import ProductComp from "./ProductComp";

it("item should enter cart when add to cart btn is pressed", () => {
  render(
    <ProductComp
      item={item}
      handleCartIncrease={handleCartIncrease}
    />
  );
});
