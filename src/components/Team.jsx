import TeamCss from "../style/Team.module.css";

import React from 'react';

function Team(props) {
  return (
    <section className={TeamCss.container}>
      <h2>Our Team</h2>
      <article className={TeamCss.cardContainer}>
        <div className={TeamCss.singleCard}>
          <img src="https://picsum.photos/200/200" alt="" />
          <h3>Lorem, ipsum dolor.</h3>
          <h4>Lorem ipsum dolor sit.</h4>
          <div className={TeamCss.socialContainer}>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fas fa-rss-square"></i>
          </div>
        </div>
        <div className={TeamCss.singleCard}>
          <img src="https://picsum.photos/200/201" alt="" />
          <h3>Lorem, ipsum dolor.</h3>
          <h4>Lorem ipsum dolor sit.</h4>
          <div className={TeamCss.socialContainer}>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fas fa-rss-square"></i>
          </div>
        </div>
        <div className={TeamCss.singleCard}>
          <img src="https://picsum.photos/200/202" alt="" />
          <h3>Lorem, ipsum dolor.</h3>
          <h4>Lorem ipsum dolor sit.</h4>
          <div className={TeamCss.socialContainer}>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fas fa-rss-square"></i>
          </div>
        </div>
        <div className={TeamCss.singleCard}>
          <img src="https://picsum.photos/200/203" alt="" />
          <h3>Lorem, ipsum dolor.</h3>
          <h4>Lorem ipsum dolor sit.</h4>
          <div className={TeamCss.socialContainer}>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fas fa-rss-square"></i>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Team;