import Header from '../components/Header';
import Responsive from '../components/Carousel';
import Statistic from '../components/Statistic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


import React from 'react';

function Home({products}) {
  
  return (
    <>
      <Header products={products}></Header>
      <Responsive></Responsive>
      <Statistic></Statistic>
    </>
  );
}

export default Home;