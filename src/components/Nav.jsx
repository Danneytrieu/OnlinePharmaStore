import React, { Component } from "react";
import NavCss from "./Nav.module.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <>
        <div className={NavCss.container}>
          <div className={NavCss.left}>
            <h1 className={NavCss.branding}><a href="/">FILL MY PILL</a></h1>
            <div className={NavCss.dropdownContainer}>
              <i className="fas fa-bars"></i>
              <span className={NavCss.dropdownTitle}>Browse Categories</span>
            </div>
          </div>
          <div className={NavCss.right}>
            <div className={NavCss.links}>
              <Link className={NavCss.link} to="/">
                HOME
              </Link>
              <Link className={NavCss.link} to="/products">
                SHOP
              </Link>
              <Link className={NavCss.link} to="/about">
                ABOUT US
              </Link>
              <Link className={NavCss.link} to="/contact">
                CONTACT
              </Link>
            </div>
            <section className={NavCss.wrapper}>
              <article className={NavCss.searchContainer}>
                <i className={`${NavCss.searchIcon} fas fa-search`}></i>
                <span className={NavCss.searchDescription}>
                  Search product...
                </span>
                <button className={NavCss.searchButton}>Search</button>
              </article>
              <article className={NavCss.wishCartContainer}>
                <div className={NavCss.wishContainer}>
                  <i className="fas fa-heart"></i>
                  <div className={NavCss.wishBorder}>
                    <span className={NavCss.wishAmount}>0</span>
                  </div>
                </div>
                <div className={NavCss.cartContainer}>
                  <i className="fas fa-shopping-cart"></i>
                  <div className={NavCss.cartBorder}>
                    <span className={NavCss.cartAmount}>0</span>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
