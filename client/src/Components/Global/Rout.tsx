// import { lazy } from "react";
import React, { createContext, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Team from "../Team/Team.tsx";
import PricingPlan from "../PricingPlan/PricingPlan.tsx";
import Contact from "../Contact/Contact.tsx";
import Checkout from "../Checkout/Checkout";
import OrderDetails from "../Checkout/OrderDetails.jsx";
import Cart from "../Cart/Cart.tsx";

// const Cart = lazy(() => {
//   return import("../Cart/Cart");
// });
// const Checkout = lazy(() => {
//   return import("../Checkout/Checkout");
// });


const Rout = ({
  URL,
  handleFetchPromiseError,
  handleJsonPromiseResponseLog,
  handleFetchError,
  date,
  cartLength,
  handleCartIncrease,
  items,
  cart,
  setCart,
  removeItem,
  decreaseQty,
  increaseQty,
  grandTotal,
  carouselImgMode,
}) => {
  type RoutType = {
    items?: object[];
    setCart?: Function;
    cartLength?: number;
    date?: string;
  };
  return (
    <Routes>
      <Route
        path="/PricingPlan"
        element={<PricingPlan cartLength={cartLength} />}
      />
      <Route
        path="/Contact"
        element={<Contact cartLength={cartLength} />}
      />
      <Route
        path="/Team"
        element={<Team cartLength={cartLength} />}
      />
      <Route
        path="/"
        element={
          <Home
            URL={URL}
            handleFetchPromiseError={handleFetchPromiseError}
            handleJsonPromiseResponseLog={handleJsonPromiseResponseLog}
            handleFetchError={handleFetchError}
            handleCartIncrease={handleCartIncrease}
            items={items}
            carouselImgMode={carouselImgMode}
            cartLength={cartLength}
            cart={cart}
            darkMode={null}
          />
        }
      />
      <Route
        path="/Cart"
        element={
          <Cart
            cart={cart}
            items={items}
            setCart={setCart}
            cartLength={cartLength}
            removeItem={removeItem}
            decreaseQty={decreaseQty}
            increaseQty={increaseQty}
            grandTotal={grandTotal}
          />
        }
      />
      <Route
        path="/Checkout"
        element={
          <Checkout
            URL={URL}
            date={date}
            cart={cart}
            items={items}
            setCart={setCart}
            cartLength={cartLength}
            removeItem={removeItem}
            decreaseQty={decreaseQty}
            increaseQty={increaseQty}
            grandTotal={grandTotal}
          />
        }
      />
      <Route
        path="/order-details"
        element={
          <OrderDetails
            cart={cart}
            grandTotal={grandTotal}
          />
        }
      />
    </Routes>
  );
};

export default Rout;
