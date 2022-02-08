import DetailCss from "./Detail.module.css";
import defaultImg from "../components/image/default.jpg"

import React from 'react';

function Detail(props) {
  return (
    <section className={DetailCss.container}>
      <article className={DetailCss.shoppingCard}>
        <img src={defaultImg} alt="med" />
        <aside className={DetailCss.card}>
          <h2>Atorvastain</h2>
          <h3>$10.11</h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco,Proin lectus
            ipsum, gravida et mattis vulputate, tristique ut lectus
          </h4>
          <div className={DetailCss.wishlist}>
            <div>
              <span>0</span>
            </div>
            <button>+ Add</button>
            <i class="far fa-heart"></i>
            <span>Add to Wishlist</span>
          </div>
        </aside>
      </article>
      <article className={DetailCss.pharmaCard}>
        <div className={DetailCss.pharmaTitle}>
          <h2>Pharmacies</h2>
          <h3>Prices as low as $6.51</h3>
        </div>
        <div className={DetailCss.pharmaLine}></div>
        <div className={DetailCss.pharmaList}>
          <section>
            <p>Albertsons</p>
            <p>Kroger</p>
            <p>Safeway</p>
            <p>Target</p>
            <p>CVS</p>
          </section>
          <section className={DetailCss.straightline}>
            <p>$53</p>
            <p>$53</p>
            <p>$53</p>
            <p>$53</p>
            <p>$53</p>
          </section>
          <section>
            <p>$20</p>
            <p>$20</p>
            <p>$20</p>
            <p>$20</p>
            <p>$20</p>
          </section>
        </div>
      </article>
    </section>
  );
}

export default Detail;