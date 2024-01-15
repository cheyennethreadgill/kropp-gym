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
    cart: PropTypes.arrayOf.isRequired,
    setCart: PropTypes.arrayOf.isRequired,
    removeItem: PropTypes.func.isRequired,
    decreaseQty: PropTypes.func.isRequired,
    increaseQty: PropTypes.func.isRequired,
    grandTotal: PropTypes.func.isRequired,
    items: PropTypes.arrayOf.isRequired,
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
