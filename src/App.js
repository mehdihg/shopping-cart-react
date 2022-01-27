import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Checkout from "./components/checkout/Checkout";
import DataContextProvider from "./components/datacontext/DataContextProvider";
import Footer from "./components/footer/Footer";
import HomePage from "./components/homepage/HomePage";
import ProductDetails from "./components/productdetails/ProductDetails";
import ReducerProducts from "./components/reducer/ReducerProducts";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

import Navbar from "./components/shared/Navbar";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <DataContextProvider>
      <ReducerProducts>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </ReducerProducts>
    </DataContextProvider>
  );
}

export default App;
