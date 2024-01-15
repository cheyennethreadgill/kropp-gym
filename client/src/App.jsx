import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Rout from "./Components/Global/Rout";
import products from "./data/products";

const App = () => {
  const [cart, setCart] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(products);
  const darkMode = true;

  // ----------------------------------------------------------------------------Remove Item
  const removeItem = (id) => {
    cart.find((item) => {
      if (id === item.id) {
        return id !== item.id;
      }
      return item;
    });
    if (cart.length >= 0) {
      setCart(
        cart.filter((item) => {
          return id !== item.id;
        })
      );
    }
    return id;
  };

  // ----------------------------------------------------------------------------Increase Quantity
  const increaseQty = (prod) => {
    const existingProduct = cart.find((item) => {
      return prod.id === item.id;
    });

    if (existingProduct) {
      setCart(
        cart.map((item) => {
          return item.id === prod.id
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
            : item;
        })
      );
    }
  };

  // ----------------------------------------------------------------------------decrease Quantity
  const decreaseQty = (prod) => {
    const existingProduct = cart.find((item) => {
      return prod.id === item.id;
    });
    if (existingProduct) {
      setCart(
        cart.map((item) => {
          return prod.id === item.id
            ? {
                ...existingProduct,
                quantity: Math.max(1, existingProduct.quantity - 1),
              }
            : item;
        })
      );
    }
    if (existingProduct.quantity < 1) {
      setCart(
        cart.filter((item) => {
          return prod.id !== item.id;
        })
      );
    }
  };

  // -------------------------------------------------------------------------calculate Grand total
  const grandTotal = cart.reduce((price, item) => {
    return price + item.quantity * item.price;
  }, 0);

  const handleCartIncrease = (id) => {
    // eslint-disable-next-line no-unused-vars
    let isPresent = false;
    const existingProduct = cart.find((item) => {
      return id === item.id;
    });
    if (existingProduct) {
      // eslint-disable-next-line no-alert
      alert("Item already added");
    } else {
      items.filter((item) => {
        if (id === item.id) {
          isPresent = true;
          setCart([...cart, { ...item, quantity: 1 }]);
        }
        return item;
      });
    }
  };

  return (
    <BrowserRouter>
      <Rout
        removeItem={removeItem}
        decreaseQty={decreaseQty}
        increaseQty={increaseQty}
        grandTotal={grandTotal}
        handleCartIncrease={handleCartIncrease}
        items={items}
        cart={cart}
        setCart={setCart}
        cartLength={cart.length}
        darkMode={darkMode}
      />
    </BrowserRouter>
  );
};

export default App;
