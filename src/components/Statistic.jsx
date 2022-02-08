import StatisticCss from "../style/Statistic.module.css";

import React from 'react';

function Statistic(props) {
  return (
    <section className={StatisticCss.container}>
      <h2>Did you know?</h2>
      <article className={StatisticCss.statContainer}>
        <div className={StatisticCss.singleStat}>
          <h3>$100+</h3>
          <h4>How much prices can differ between pharmacies</h4>
        </div>
        <div className={StatisticCss.singleStat}>
          <h3>75%</h3>
          <h4>of our customers with insurance</h4>
        </div>
        <div className={StatisticCss.singleStat}>
          <h3>70,000+</h3>
          <h4>U.S. pharmacies accept our service</h4>
        </div>
      </article>
    </section>
  );
}

export default Statistic;