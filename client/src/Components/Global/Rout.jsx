// import { lazy } from "react";
import React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Team from "../Team/Team";
import PricingPlan from "../PricingPlan/PricingPlan";
import Contact from "../Contact/Contact";
import Checkout from "../Checkout/Checkout";
import OrderDetails from "../Checkout/OrderDetails";
import Cart from "../Cart/Cart";

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
  darkMode,
  cartLength,
  handleCartIncrease,
  items,
  cart,
  setCart,
  removeItem,
  decreaseQty,
  increaseQty,
  grandTotal,
}) => {
  Rout.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    cartLength: PropTypes.number.isRequired,
    handleCartIncrease: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    decreaseQty: PropTypes.func.isRequired,
    increaseQty: PropTypes.func.isRequired,
    grandTotal: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
  };
  return (
    <Routes>
      <Route
        path="/PricingPlan"
        element={
          <PricingPlan
            darkMode={darkMode}
            cartLength={cartLength}
          />
        }
      />
      <Route
        path="/Contact"
        element={
          <Contact
            darkMode={darkMode}
            cartLength={cartLength}
          />
        }
      />
      <Route
        path="/Team"
        element={
          <Team
            darkMode={darkMode}
            cartLength={cartLength}
          />
        }
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
            darkMode={darkMode}
            cartLength={cartLength}
            cart={cart}
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
            darkMode={darkMode}
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
            darkMode={darkMode}
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
            date={date}
            cart={cart}
            items={items}
            setCart={setCart}
            darkMode={darkMode}
            cartLength={cartLength}
            grandTotal={grandTotal}
          />
        }
      />
    </Routes>
  );
};

export default Rout;
