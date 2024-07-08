import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Routines from "./Routines";
import HomeShop from "./HomeShop";
import HomeTrainer from "./HomeTrainer";
import Footer from "../Global/Footer";
import Quotes from "./Quotes";
import Video from "./HomeBlogStart";

const Home = ({
  URL,
  handleFetchPromiseError,
  handleJsonPromiseResponseLog,
  handleFetchError,
  cart,
  cartLength,
  items,
  handleCartIncrease,
  darkMode,
  carouselImgMode,
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
        darkMode={darkMode}
        carouselImgMode={carouselImgMode}
        cartLength={cartLength}
        cart={cart}
      />
      <Newsletter />
      <Routines />
      <HomeTrainer />
      <Quotes />
      <Video />
      <section
        style={{ height: " 500px" }}
        className="bg-dark"
      ></section>
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
