import ProductCss from "../style/Product.module.css";
import pill from "../assets/image/pill.png"

import React from 'react';

function Product(props) {
  const { brand, form, dosage, quantity, price_detail } = props.detail;
  const minPrice = Math.min(...price_detail.price);
  const maxPrice = Math.max(...price_detail.price);
  const maxSaving = price_detail.savings[0];
  
  return (
    <section className={ProductCss.container}>
      <img src={pill} alt="" />
      <h2>{brand}</h2>
      <h3>
        {quantity} {form} {dosage}
      </h3>
      <h4>${minPrice}</h4>
      <h5>${maxPrice}</h5>
      <h6>
        Save up to <span>{maxSaving}</span>
      </h6>
    </section>
  );
}

export default Product;