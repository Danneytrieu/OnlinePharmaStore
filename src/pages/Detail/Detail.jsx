import DetailCss from "./Detail.module.css";
import React, { useState, useEffect } from "react";
import useFetch from "../../helper/useFetch";
import { useParams } from "react-router";

function Detail(props) {
  const params = useParams();
  const id = parseInt(params.id);
  const [product, setProduct] = useState();
  const { get, loading } = useFetch(
    "https://fillmypilltest-default-rtdb.firebaseio.com/"
  );
  //Fetch and filter data
  useEffect(() => {
    get(".json")
      .then((datas) => {
        setProduct(datas.filter((data) => data.id === id));
      })
      .catch((error) => console.log(error));
  }, []);

  if (product) {
    console.log(product[0].price_detail.pharmacy);
  }

  return (
    <section className={DetailCss.container}>
      {product && (
        <>
          <article className={DetailCss.shoppingCard}>
            <img src={product[0].image} alt="med" />
            <aside className={DetailCss.card}>
              <h2>{product[0].display}</h2>
              <h3>${Math.min(...product[0].price_detail.price)}</h3>
              <h4>{product[0].description}</h4>
              <div className={DetailCss.wishlist}>
                <div>
                  <span>0</span>
                </div>
                <button>+ Add</button>
                <i className="far fa-heart"></i>
                <span>Add to Wishlist</span>
              </div>
            </aside>
          </article>
          <article className={DetailCss.pharmaCard}>
            <div className={DetailCss.pharmaTitle}>
              <h2>Pharmacies</h2>
              <h3>
                Prices as low as ${Math.min(...product[0].price_detail.price)}
              </h3>
            </div>
            <div className={DetailCss.pharmaLine}></div>
            <div className={DetailCss.pharmaList}>
              <section>
                <p>{product[0].price_detail.pharmacy[0]}</p>
                <p>{product[0].price_detail.pharmacy[1]}</p>
                <p>{product[0].price_detail.pharmacy[2]}</p>
              </section>
              <section className={DetailCss.straightline}>
                <p>{product[0].prices[0]}</p>
                <p>{product[0].prices[1]}</p>
                <p>{product[0].prices[2]}</p>
              </section>
              <section>
                <p>{product[0].price_detail.price[0]}</p>
                <p>{product[0].price_detail.price[1]}</p>
                <p>{product[0].price_detail.price[2]}</p>
              </section>
            </div>
          </article>
        </>
      )}
    </section>
  );
}

export default Detail;
