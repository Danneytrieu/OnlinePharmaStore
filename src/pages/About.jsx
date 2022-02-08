import React, { Component } from 'react';
import Aboutus from "../components/Aboutus";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";


class About extends Component {
  render() {
    return (
      <>
        <Aboutus></Aboutus>
        <Team></Team>
        <Testimonial></Testimonial>
      </>
    );
  }
}

export default About;