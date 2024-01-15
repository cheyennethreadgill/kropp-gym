/* eslint-disable global-require */

const products = [
  {
    id: 0,
    name: "Running Shoes",
    price: 75.0,
    img: require("../images/Home/shop/shop-single-img-1.jpg.webp"),
    category: ["Fitness "],
  },
  {
    id: 1,
    name: "Folic Acid",
    price: 15.0,
    img: require("../images/Home/shop/blog-single-img-2.jpg.webp"),
    category: ["Nutrition "],
  },
  {
    id: 2,
    name: "Sport Bag",
    price: 40.0,
    img: require("../images/Home/shop/blog-single-img-3.jpg.webp"),
    category: ["Equipment ", "Fitness "],
  },
  {
    id: 3,
    name: "Food Protein",
    price: 15.0,
    img: require("../images/Home/shop/blog-single-img-4.jpg.webp"),
    category: ["Food & Health ", "Fitness ", "Nutrition "],
  },
  {
    id: 4,
    name: "BCAA",
    price: 18.0,
    img: require("../images/Home/shop/blog-single-img-5.jpg.webp"),
    category: ["Nutrition "],
  },
  {
    id: 5,
    name: "Can",
    price: 2.99,
    img: require("../images/Home/shop/blog-single-img-6.jpg.webp"),
    category: ["Fitness "],
  },
  {
    id: 6,
    name: "Protein Bar",
    price: 3.99,
    img: require("../images/Home/shop/blog-single-img-7.jpg.webp"),
    category: ["Food & Health ", "Nutrition "],
  },
  {
    id: 7,
    name: "Protein Pack",
    price: 8.5,
    img: require("../images/Home/shop/blog-single-img-8.jpg.webp"),
    category: ["Food & Health ", "Nutrition "],
  },
];

export default products;
