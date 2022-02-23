import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Default from "./pages/Default";
import Cart from "./pages/Cart/Cart";
import StoreFront from "./pages/StoreFront/StoreFront";
import Home from "./pages/Home";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About";
import ProductDetail from "./pages/Detail/ProductDetail";
import useFetch from "./helper/useFetch";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://fillmypilltest-default-rtdb.firebaseio.com/"
  );
  const cartCount = cart.reduce((total, product) => {
    return total + product.cartQuantity;
  }, 0);
  //Fetch products' data
  useEffect(() => {
    get(".json")
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);
  //Document title change
  useEffect(() => {
    if (cart === 0) {
      document.title = `FILL MY PILL || Add your first item`;
    }
    if (cart.length === 1) {
      document.title = `FILL MY PILL || Checkout (${cartCount}) item`;
    }
    if (cart.length > 1) {
      document.title = `FILL MY PILL || Checkout (${cartCount}) items`;
    }
  }, [cart]);
  //Function add product
  function handleProductAdd(newProduct) {
    //scenario 1: found match item in cart -> only update quantity
    const existingProduct = cart.find(
      (product) => product.id === newProduct[0].id
    );
    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct[0].id) {
          return { ...product, cartQuantity: product.cartQuantity + 1 };
        }
        return product;
      });
      setCart(updatedCart);
      //scenario 2: no match item in cart
    } else {
      setCart([...cart, { ...newProduct[0], cartQuantity: 1 }]);
    }
  }
  //Function delete product
  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }
  return (
    <>
      <Nav
        cartCount={cartCount}
        cart={cart}
        onProductAdd={handleProductAdd}
        onProductDelete={handleProductDelete}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route
          exact
          path="/products"
          element={<StoreFront loading={loading} products={products} />}
        />
        <Route
          exact
          path="/products/product/:id"
          element={
            <ProductDetail cart={cart} onProductAdd={handleProductAdd} />
          }
        />

        <Route
          exact
          path="/cart"
          element={
            <Cart
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Banner />
      <Footer />
    </>
  );
}

export default App;
