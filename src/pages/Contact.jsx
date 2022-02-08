import React, { Component } from "react";
import ContactCss from "./Contact.module.css";



class Contact extends Component {
  render() {
    return (
      <>
          <article className={ContactCss.container}>
              <h2>Contact Us</h2>
              <h3>Address</h3>
              <h4>123 Main Street, Anytown, CA 12345 – USA</h4>
              <h3>Phone</h3>
              <h4>Hotline: 1009 678 456</h4>
              <h3>Email</h3>
              <h4>mail@domain.com</h4>
          </article>

      </>
    );
  }
}

export default Contact;
