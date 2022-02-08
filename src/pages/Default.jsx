import React, { Component } from "react";
import error from "../components/image/404.jpg";

class Default extends Component {
  render() {
    return (
      <section>
        <img src={error} alt="404" style={{ width: "100%"}} />
      </section>
    );
  }
}

export default Default;
