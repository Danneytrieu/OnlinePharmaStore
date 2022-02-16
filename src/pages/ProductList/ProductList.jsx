import Product from "../../components/Product";
import ProlistCss from "./ProductList.module.css";
import { products } from "../../context/productData";

import React from "react";

function ProductList(props) {
  const categoriesArray = [
    "Allergy & Hay Fever",
    "Headache & Pain Relief",
    "Cold & Cough & Flu",
    "Stomach & Bowel",
    "Thrush Treatments",
    "Fungal Infections",
    "Infant Medicines",
    "Travel Medicines",
    "Homeopathy",
    "Cystitis",
    "First Aid",
    "Cold Sores",
    "Mouth Ulcers",
    "Nasal Care",
    "Ear Care",
    "Headlice & Scabies",
  ];
  const categoriesDisplay = categoriesArray.map(item => <h3 key={item}>{item}</h3>)
  const productsDisplay = products.map((product, index) => (
    <Product key={index} detail={products[index]} />
  ));

  return (
    <section className={ProlistCss.container}>
      <article className={ProlistCss.categoriesContainer}>
        <h2>Categories</h2>
        {categoriesDisplay}
      </article>
      <article className={ProlistCss.barContainer}>
        <i className="fas fa-grip-vertical"></i>
        <i className="fas fa-bars"></i>
        <h3> Showing 1–10 of 20 results</h3>
      </article>
      <article className={ProlistCss.productsContainer}>
        {productsDisplay}
        <button>See More</button>
      </article>
    </section>
  );
}

export default ProductList;
