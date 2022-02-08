import React, { Component } from "react";
import AboutusCss from "./Aboutus.module.css";

class Aboutus extends Component {
  render() {
    return (
      <>
        <section className={AboutusCss.container}>
          <aside className={AboutusCss.left}>
            <h2>About Our Pharmacy Store</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              unde quisquam earum delectus nihil maiores, sint, fugit repellat
              iure, reiciendis porro laboriosam sit voluptatem impedit
              cupiditate consequatur! Unde explicabo laborum ea dicta similique
              consectetur rem ratione iure dolore quos beatae inventore quidem
              voluptates officia, consequatur doloremque dignissimos eum minus
              quam.
            </p>
          </aside>
          <aside className={AboutusCss.right}>
            <img src="https://picsum.photos/400/400" alt="" />
          </aside>
        </section>
      </>
    );
  }
}

export default Aboutus;
