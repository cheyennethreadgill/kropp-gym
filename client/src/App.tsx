import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Rout from "./Components/Global/Rout.tsx";
import products from "./data/products";
import ChatBot from "./Components/Global/Chatbot.jsx";

const App = () => {
  type ItemType = {
    id: number;
    name: string;
    price: number;
    img: string;
    category: string[];
    quantity?: number;
  };

  let dateObj = new Date();
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth();
  let day = dateObj.getDate();

  const finalMonth = (): string | number => {
    if (month <= 10 && month === 0) {
      return `0 ${month} + 1}`;
    } else {
      return month;
    }
  };
  const finalDay = (): string | number => {
    if (day <= 10) {
      return `0${day}`;
    } else {
      return day;
    }
  };

  let date: string = `${year}-${finalMonth()}-${finalDay()}`;

  const [cart, setCart] = useState<ItemType[]>([]);
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(products);

  const carouselImgMode = true;

  // ----------------------------------------------------------------------------Remove Item
  const removeItem = (id: number) => {
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
  const increaseQty = (prod: ItemType) => {
    const existingProduct = cart.find((item) => {
      return prod.id === item.id;
    });

    if (existingProduct) {
      setCart(
        cart.map((item) => {
          return item.id === prod.id ? { ...existingProduct, quantity: (existingProduct.quantity || 0) + 1 } : item;
        })
      );
    }
  };

  // ----------------------------------------------------------------------------decrease Quantity
  const decreaseQty = (prod: ItemType) => {
    const existingProduct = cart.find((item) => {
      return prod.id === item.id;
    });
    if (existingProduct) {
      setCart(
        cart.map((item) => {
          return prod.id === item.id
            ? {
                ...existingProduct,
                quantity: Math.max(1, (existingProduct.quantity || 0) - 1),
              }
            : item;
        })
      );
      if ((existingProduct.quantity || 0) < 1) {
        setCart(
          cart.filter((item) => {
            return prod.id !== item.id;
          })
        );
      }
    }
  };

  // -------------------------------------------------------------------------calculate Grand total
  const grandTotal = cart.reduce((price, item) => {
    return price + (item.quantity || 0) * item.price;
  }, 0);

  const handleCartIncrease = (id: number) => {
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

  // const URL = "http://localhost:8080/";
  const URL = "https://kropp-gym-api.vercel.app/";

  // ERROR HANDLING
  const handleFetchPromiseError = (response) => {
    if (!response.ok) {
      console.log(`Something went wrong with fetch from server ${response.status}`);
    }
  };
  const handleJsonPromiseResponseLog = (response) => {
    response.then((res) => {
      console.log(res);
    });
  };
  const handleFetchError = (err) => {
    console.log(`FETCH FAILED: ${err}`);
  };

  const [chatOpen, setChatOpen] = useState(true);
  function close() {
    setChatOpen(!chatOpen);
    console.log(chatOpen);
  }

  return (
    <>
      <ChatBot
        handleChatClick={close}
        status={chatOpen}
      />
      <BrowserRouter>
        <Rout
          URL={URL}
          handleFetchPromiseError={handleFetchPromiseError}
          handleJsonPromiseResponseLog={handleJsonPromiseResponseLog}
          handleFetchError={handleFetchError}
          date={date}
          removeItem={removeItem}
          decreaseQty={decreaseQty}
          increaseQty={increaseQty}
          grandTotal={grandTotal}
          handleCartIncrease={handleCartIncrease}
          items={items}
          cart={cart}
          setCart={setCart}
          cartLength={cart.length}
          carouselImgMode={carouselImgMode}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
