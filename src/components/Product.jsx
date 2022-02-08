import ProductCss from "../style/Product.module.css";
import pill from "../assets/image/pill.png"

import React from 'react';

function Product(props) {
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

export default Product;