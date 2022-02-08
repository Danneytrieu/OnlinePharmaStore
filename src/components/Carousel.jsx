import React, { Component } from "react";
import Slider from "react-slick";
import CarouselCss from "../style/Carousel.module.css";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={CarouselCss.container}>
        <h2> Featured brand </h2>
        <Slider {...settings}>
          <div className={CarouselCss.imageContainer}>
            <img src="https://picsum.photos/150/100" alt="" />
          </div>
          <div className={CarouselCss.imageContainer}>
            <img src="https://picsum.photos/150/101" alt="" />
          </div>
          <div className={CarouselCss.imageContainer}>
            <img src="https://picsum.photos/150/102" alt="" />
          </div>
          <div className={CarouselCss.imageContainer}>
            <img src="https://picsum.photos/150/103" alt="" />
          </div>
          <div className={CarouselCss.imageContainer}>
            <img src="https://picsum.photos/150/104" alt="" />
          </div>
          <div className={CarouselCss.imageContainer}>
            <img src="https://picsum.photos/150/105" alt="" />
          </div>
          <div className={CarouselCss.imageContainer}>
            <img src="https://picsum.photos/150/106" alt="" />
          </div>
          <div className={CarouselCss.imageContainer}>
            <img src="https://picsum.photos/150/107" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
