import React from "react";
import Style from "../style/CartModal.module.css";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";

function Modal({ cart, onProductAdd, onProductDelete }) {
  return (
    <section className={Style.container}>

      {cart.length > 0 && (
        <table className={`${Style.table} ${Style.tableCart}`}>
          <thead>
            <tr>
              <th width="25%" className={Style.thProduct}>
                Product
              </th>
              <th width="20%">Unit price</th>
              <th width="10%">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <>
                  <tr>
                    <td>
                      <Link
                        to={`/products/product/${product.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={product.image}
                          width="30"
                          height="30"
                          alt=""
                        />
                        <span style={{ padding: "10px" }}>{product.brand}</span>
                      </Link>
                    </td>

                    <td>${Math.min(...product.price_detail.price)}</td>
                    <td>
                      {product.cartQuantity}
                      <BsCartPlusFill
                        className={Style.add}
                        onClick={() => onProductAdd([product])}
                      />
                      <FaTrashAlt
                        className={Style.delete}
                        onClick={() => onProductDelete(product.id)}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default Modal;
