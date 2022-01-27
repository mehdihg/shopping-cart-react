import React from "react";
import MainShopCard from "./MainShopCard";

const MainShop = () => {

  return (
    <div className="mainshop">
      <div className="productslide">
        <h2 id="jewel" className="jeweltitle">
          Jewelery
        </h2>
        <MainShopCard category="jewelery" />
      </div>

      <div className="productslide">
        <h2 id="Men" className="jeweltitle">
          Men's clothes
        </h2>
        <MainShopCard category="men's clothing" />
      </div>
      <div className="productslide">
        <h2 id="Women" className="jeweltitle">
          Women's clothes
        </h2>
        <MainShopCard category="women's clothing" />
      </div>
    </div>
  );
};

export default MainShop;
