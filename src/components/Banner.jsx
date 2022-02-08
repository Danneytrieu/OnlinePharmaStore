import BannerCss from "../style/Banner.module.css";
import React from 'react';

function Banner(props) {
  return (
    <section className={BannerCss.container}>
      <article className={BannerCss.textContainer}>
        <h2>
          We Have a <span>Special Gift</span> for You
        </h2>
        <h3>Take 30% off when you spend $150 or more with code FILL01</h3>
      </article>
      <article className={BannerCss.buttonContainer}>
        <button>DISCOVER NOW</button>
      </article>
      <article className={BannerCss.socialContainer}>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fas fa-rss-square"></i>
      </article>
    </section>
  );
}

export default Banner;