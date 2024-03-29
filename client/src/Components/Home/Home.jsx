import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Routines from "./Routines";
import HomeShop from "./HomeShop";
import HomeTrainer from "./HomeTrainer";
import Footer from "../Global/Footer";
import Quotes from "./Quotes";

const Home = ({
  URL,
  handleFetchPromiseError,
  handleJsonPromiseResponseLog,
  handleFetchError,
  cart,
  cartLength,
  items,
  handleCartIncrease,
}) => {
  Home.propTypes = {
    cartLength: PropTypes.number.isRequired,
    handleCartIncrease: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
  };

  // eslint-disable-next-line no-unused-vars
  const [price, setPrice] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [increase, setIncrease] = useState(price);
  return (
    <section>
      <Header
        cartLength={cartLength}
        cart={cart}
      />
      <Newsletter />
      <Routines />
      <HomeTrainer />
      <Quotes />
      <HomeShop
        items={items}
        handleCartIncrease={handleCartIncrease}
        cartTotal={increase}
        cart={cart}
      />
      <Footer
        URL={URL}
        handleFetchPromiseError={handleFetchPromiseError}
        handleJsonPromiseResponseLog={handleJsonPromiseResponseLog}
        handleFetchError={handleFetchError}
      />
    </section>
  );
};

export default Home;
