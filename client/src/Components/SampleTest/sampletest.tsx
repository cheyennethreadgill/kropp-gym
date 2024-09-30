import React from "react";

const TestApp = () => {
  const add = (a: number, b: number) => {
    return a + b;
  };

  return <h1> Sum: {add(5, 3)} </h1>;
};

export default TestApp;
