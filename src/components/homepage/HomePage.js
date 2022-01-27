import React, { useContext } from "react";
import { ContextProvider } from "../datacontext/DataContextProvider";

import Loader from "../loader/Loader";
import MainShop from "../mainshop/MainShop";

import Slider from "../slider/Slider";
import "./HomePage.css";
const HomePage = () => {
  const DataContext = useContext(ContextProvider);

  return (
    <>
      <div>
        <Slider />
        {DataContext.length ? <MainShop /> : <Loader />}
      </div>
    </>
  );
};

export default HomePage;
