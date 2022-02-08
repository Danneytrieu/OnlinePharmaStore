import React, { Component } from "react";
import Header from '../components/Header';
import Responsive from '../components/Carousel';
import Statistic from '../components/Statistic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Home extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Responsive></Responsive>
        <Statistic></Statistic>
      </>
    );
  }
}

export default Home;
