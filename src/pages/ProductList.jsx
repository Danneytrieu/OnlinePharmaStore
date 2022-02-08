import React, { Component } from 'react';
import Product from '../components/Product';
import ProlistCss from "./ProductList.module.css"

class ProductList extends Component {
  render() {
    return (
      <section className={ProlistCss.container}>
        <article className={ProlistCss.categoriesContainer}>
          <h2>Categories</h2>
          <h3>Allergy & Hay Fever</h3>
          <h3>Headache & Pain Relief</h3>
          <h3>Cold, Cough & Flu</h3>
          <h3>Stomach & Bowel</h3>
          <h3>Thrush Treatments</h3>
          <h3>Fungal Infections</h3>
          <h3>Infant Medicines</h3>
          <h3>Travel Medicines</h3>
          <h3>Homeopathy</h3>
          <h3>Cystitis</h3>
          <h3>First Aid</h3>
          <h3>Cold Sores</h3>
          <h3>Mouth Ulcers</h3>
          <h3>Nasal Care</h3>
          <h3>Ear Care</h3>
          <h3>Headlice & Scabies</h3>
        </article>
        <article className={ProlistCss.barContainer}>
          <i className="fas fa-grip-vertical"></i>
          <i className="fas fa-bars"></i>
          <h3> Showing 1–12 of 20 results</h3>
        </article>
        <article className={ProlistCss.productsContainer}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <button>See More</button>
        </article>
      </section>
    );
  }
}

export default ProductList;