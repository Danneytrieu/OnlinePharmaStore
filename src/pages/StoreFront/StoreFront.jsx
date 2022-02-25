import Product from "../../components/Product";
import ProlistCss from "./StoreFront.module.css";
import React from "react";
import Loader from "../../components/Loader";

function ProductList({loading,products}) {
  
  //Categories display items
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

  return (
    <section className={ProlistCss.container}>
      <article className={ProlistCss.categoriesContainer}>
        <h2>Categories</h2>
        {categoriesArray.map((item) => (
          <h3 key={item}>{item}</h3>
        ))}
      </article>
      <article className={ProlistCss.barContainer}>
        <i className="fas fa-grip-vertical"></i>
        <i className="fas fa-bars"></i>
        <h3> Showing 1–10 of 20 results</h3>
      </article>
      <article className={ProlistCss.productsContainer}>
        {loading && <Loader />}
        {products.map((product) => {
          return <Product key={product.id} id={product.id} details={product} />;
        })}
  
        <button>See More</button>
      </article>
    </section>
  );
}

export default ProductList;
