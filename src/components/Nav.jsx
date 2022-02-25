import NavCss from "../style/Nav.module.css";
import { NavLink, Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Modal from "./CartModal";
import DropModal from "./DropModal";

function Nav({ products, cart, cartCount, onProductAdd, onProductDelete }) {
  const [filteredData, setFilteredData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openDropModal, setOpenDropModal] = useState(false);

  function handleFilterChange(e) {
    const searchWord = e.target.value;
    const newFilter = products.filter((product) => {
      return product.display.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }

  function handleModalClick() {
    setOpenDropModal((prev) => !prev);
  }
  const inputRef = useRef();
  //Search bar auto focus on render
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <div className={NavCss.container}>
        <div className={NavCss.left}>
          <h1 className={NavCss.branding}>
            <a href="/">FILL MY PILL</a>
          </h1>
          <div className={NavCss.dropdownContainer}>
            <i className="fas fa-bars"></i>
            <div onClick={handleModalClick} className={NavCss.dropdownTitle}>
              Browse Categories
            </div>
          </div>
          {openDropModal && <DropModal />}
        </div>
        <div className={NavCss.right}>
          <div className={NavCss.links}>
            <NavLink className={NavCss.link} to="/">
              HOME
            </NavLink>
            <NavLink className={NavCss.link} to="/products">
              SHOP
            </NavLink>
            <NavLink className={NavCss.link} to="/about">
              ABOUT US
            </NavLink>
            <NavLink className={NavCss.link} to="/contact">
              CONTACT
            </NavLink>
          </div>
          <section className={NavCss.wrapper}>
            <article className={NavCss.searchContainer}>
              <i className={`${NavCss.searchIcon} fas fa-search`}></i>
              <input
                onChange={handleFilterChange}
                ref={inputRef}
                placeholder="Search product..."
                className={NavCss.searchInput}
              />
              {filteredData.length != 0 && (
                <div className={NavCss.searchResult}>
                  {filteredData.map((product) => {
                    return (
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        key={product.id}
                        to={`/products/product/${product.id}`}
                      >
                        <div className={NavCss.searchItem}>
                          {product.display}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}

              <button className={NavCss.searchButton}>Search</button>
            </article>
            <article
              className={NavCss.wishCartContainer}
              onMouseEnter={() => setOpenModal(true)}
              onMouseLeave={() => setOpenModal(false)}
            >
              <Link to="/cart">
                <div className={NavCss.cartContainer}>
                  <i className="fas fa-shopping-cart"></i>
                  {openModal && (
                    <Modal
                      cart={cart}
                      onProductAdd={onProductAdd}
                      onProductDelete={onProductDelete}
                    />
                  )}

                  <div className={NavCss.cartBorder}>
                    <span className={NavCss.cartAmount}>{cartCount}</span>
                  </div>
                </div>
              </Link>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}

export default Nav;
