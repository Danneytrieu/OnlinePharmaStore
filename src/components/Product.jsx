import React, { Component } from 'react';
import ProductCss from "./Product.module.css"
import pill from "./image/pill.png"

class Product extends Component {
  render() {
    return (
      <section className={ProductCss.container}>
        <img src={pill} alt="" />
        <h2>Atorvastain</h2>
        <h3>30 tablets 40mg</h3>
        <h4>$17.80</h4>
        <h5>$10.11</h5>
        <h6>
          Save up to <span>43%</span>{" "}
        </h6>
      </section>
    );
  }
}

export default Product;