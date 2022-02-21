import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Default from "./pages/Default";
import Cart from "./pages/Cart";
import StoreFront from "./pages/StoreFront/StoreFront";
import Home from "./pages/Home";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About";
import Detail from "./pages/Detail/Detail";

function App() {
  // FIXME: save to localstorage
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems") ?? ["one", "two", "three"]);
  });
  const [wishItems, setWishItems] = useState(["1","2","3"]);
  

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (cartItems === 0) {
      document.title = `FILL MY PILL || Add your first item`;
    }
    if (cartItems.length === 1) {
      document.title = `FILL MY PILL || Checkout (${cartItems.length}) item`;
    }
    if (cartItems.length > 1) {
      document.title = `FILL MY PILL || Checkout (${cartItems.length}) items`;
    }
  }, [cartItems]);

  return (
    <>
      <Nav cartItems={cartItems} wishItems={wishItems} />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<StoreFront />}></Route>
        <Route exact path="/products/product/:id" element={<Detail />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="*" element={<Default />}></Route>
      </Routes>
      <Banner />
      <Footer />
    </>
  );
}

export default App;
