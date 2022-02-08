import React, { Component } from "react";
import TestimonialCss from "./Testimonial.module.css";
import Slider from "react-slick";

export default class Testimonial extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className={TestimonialCss.container}>
        <h2>Client Testimonials</h2>
        <Slider {...settings}>
          <div className={TestimonialCss.singleCard}>
            <img src="https://picsum.photos/150/150" alt="" />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, dolorum?
            </h3>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
          <div className={TestimonialCss.singleCard}>
            <img src="https://picsum.photos/150/151" alt="" />
            <h3>
              Sit amet consecteturLorem ipsum dolor sit amet consectetur
              adipisicing elit. Saepe, nemo!
            </h3>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              harum?
            </h4>
          </div>
          <div className={TestimonialCss.singleCard}>
            <img src="https://picsum.photos/150/152" alt="" />
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <h4>Lorem, ipsum.</h4>
          </div>
          <div className={TestimonialCss.singleCard}>
            <img src="https://picsum.photos/150/153" alt="" />
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, dolorum?
            </h3>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
        </Slider>
      </section>
    );
  }
}
