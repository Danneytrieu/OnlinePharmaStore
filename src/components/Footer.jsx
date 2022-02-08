import React, { Component } from 'react';
import FooterCss from "./Footer.module.css"

class Footer extends Component {
  render() {
    return (
      <section className={FooterCss.container}>
        <article className={FooterCss.contactContainer}>
          <h1>FILL MY PILL</h1>
          <h2>The only Pharmacy that you'll need!</h2>
          <h3>Address</h3>
          <h4>4710-4890 Breckinridge St, Denver, CO, 80239</h4>
          <h3>Need Help?</h3>
          <h4>Call: 1-800-345-7394</h4>
        </article>
        <article className={FooterCss.informationContainer}>
          <h3>Information</h3>
          <h4>Delivery Information</h4>
          <h4>Privacy Policy</h4>
          <h4>Terms & Conditions</h4>
          <h4>Contact</h4>
          <h4>Returns</h4>
          <h4>Affilate</h4>
        </article>
        <article className={FooterCss.accountContainer}>
          <h3>My Account</h3>
          <h4>My account</h4>
          <h4>Order History</h4>
          <h4>Wishlist</h4>
          <h4>Shipping</h4>
          <h4>Privacy Policy</h4>
          <h4>Help</h4>
          <h4>Frequently Questions</h4>
        </article>
        <article className={FooterCss.subscribeContainer}>
          <h3>Newsletter Subscribe</h3>
          <h4>
            Don’t miss out on saving! We’ll never share your email address with
            a third-party.
          </h4>
          <article className={FooterCss.subscribeWrapper}>
            <span className={FooterCss.subscribeDescription}>
              Your email address...
            </span>
            <button className={FooterCss.subscribeButton}>Subscribe!</button>
          </article>
        </article>
      </section>
    );
  }
}

export default Footer;