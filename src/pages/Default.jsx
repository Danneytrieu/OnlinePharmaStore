import error from "../components/image/404.jpg";

import React from 'react';

function Default(props) {
  return (
    <section>
      <img src={error} alt="404" style={{ width: "100%" }} />
    </section>
  );
}

export default Default;
