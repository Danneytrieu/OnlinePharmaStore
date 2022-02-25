import React from "react";
import CardCss from "./Cart.module.css";
import { Link } from "react-router-dom";
import {FaTrashAlt} from "react-icons/fa"
import { BsCartPlusFill } from "react-icons/bs";

function Cart({ cart, onProductAdd, onProductDelete }) {
  const totalPrice = cart.reduce((total, product) => {
    const minPrice = Math.min(...product.price_detail.price);
    return total + minPrice * product.cartQuantity;
  }, 0);
  return (
    <div className={CardCss.container}>
      <div>
        <h1>Your Cart</h1>
        {cart.length === 0 && (
          <p>You have not added any product to your cart yet.</p>
        )}
        {cart.length > 0 && (
          <table className={`${CardCss.table} ${CardCss.tableCart}`}>
            <thead>
              <tr>
                <th width="25%" className={CardCss.thProduct}>
                  Product
                </th>
                <th width="20%">Unit price</th>
                <th width="10%">Quantity</th>
                <th width="25%">Total</th>
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
                          <span style={{ padding: "10px" }}>
                            {product.brand}
                          </span>
                        </Link>
                      </td>

                      <td>${Math.min(...product.price_detail.price)}</td>
                      <td>
                        {product.cartQuantity}
                        <BsCartPlusFill
                          className={CardCss.add}
                          onClick={() => onProductAdd([product])}
                        />
                        <FaTrashAlt
                          className={CardCss.delete}
                          onClick={() => onProductDelete(product.id)}
                        />
                      </td>
                      <td>
                        <strong>
                          $
                          {(
                            product.cartQuantity *
                            Math.min(...product.price_detail.price)
                          ).toFixed(2)}
                        </strong>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="2"></th>
                <th className={CardCss.cartHighlight}>Total</th>
                <th className={CardCss.cartHighlight}>${totalPrice}</th>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
}

export default Cart;
