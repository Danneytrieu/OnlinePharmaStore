import React, { Component } from "react";
import HeaderCss from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <>
          <section className={HeaderCss.headerContainer}>
            <h2>Stop Overpaying for Your Meds</h2>
            <h3>Try one of the popular search below and compare prices</h3>
            <article className={HeaderCss.popularItems}>
              <button>Lipitor</button>
              <button>Sildenafil</button>
              <button>Norvasc</button>
              <button>Lexapro</button>
              <button>Zoloft</button>
              <button>Sildenafil</button>
              <button>Lexapro</button>
              <button>Sildenafil</button>
              <button>Norvasc</button>
              <button>Lipotor</button>
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
                <i class="fas fa-headset"></i>
                <div>
                  <h3>Support 24/7</h3>
                  <h4>Contact us 24 hours a day</h4>
                </div>
              </div>
              <div className={HeaderCss.policy}>
                <i class="fas fa-piggy-bank"></i>
                <div>
                  <h3>Save Money</h3>
                  <h4>Get the best price</h4>
                </div>
              </div>
              <div className={HeaderCss.policy}>
                <i class="fas fa-fingerprint"></i>
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
}

export default Header;
