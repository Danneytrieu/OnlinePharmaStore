import HeaderCss from "../style/Header.module.css";
import { Link } from "react-router-dom";
import React from "react";

function Header({ products }) {
  return (
    <>
      <section className={HeaderCss.headerContainer}>
        <h2>Stop Overpaying for Your Meds</h2>
        <h3>Try one of the popular search below and compare prices</h3>
        <article className={HeaderCss.popularItems}>
          {products &&
            products.map((product) => {
              return (
                <>
                  <Link to={`/products/product/${product.id}`}>
                    <button>{product.brand}</button>
                  </Link>
                </>
              );
            })}
        </article>
        <article className={HeaderCss.policyContainer}>
          <div className={HeaderCss.policy}>
            <i className="fas fa-rocket"></i>
            <div>
              <h3>Free Shipping</h3>
              <h4>Free shipping on all US order</h4>
            </div>
          </div>
          <div className={HeaderCss.policy}>
            <i className="fas fa-headset"></i>
            <div>
              <h3>Support 24/7</h3>
              <h4>Contact us 24 hours a day</h4>
            </div>
          </div>
          <div className={HeaderCss.policy}>
            <i className="fas fa-piggy-bank"></i>
            <div>
              <h3>Save Money</h3>
              <h4>Get the best price</h4>
            </div>
          </div>
          <div className={HeaderCss.policy}>
            <i className="fas fa-fingerprint"></i>
            <div>
              <h3>Payment Secure</h3>
              <h4>Ensure secure payment</h4>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Header;
