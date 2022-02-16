import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Default from "./pages/Default";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList/ProductList";
import Home from './pages/Home';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Contact from './pages/Contact/Contact';
import About from './pages/About';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<ProductList />}></Route>
        <Route exact path="/products/:id" element={<Detail />}></Route>
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

export default App
