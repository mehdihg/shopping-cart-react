import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  isInCart,
  itemsQuantity,
  shortenParagraph,
} from "../../helpers/Helper";
import { ContextProvider } from "../datacontext/DataContextProvider";
import styles from "./ProductDetails.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { reducerContextProvider } from "../reducer/ReducerProducts";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
const ProductDetails = (props) => {
  const { state, dispatch } = useContext(reducerContextProvider);
  const DetailsContext = useContext(ContextProvider);
  const ids = props.match.params.id;
  const products = DetailsContext[ids - 1];

  const { title, image, price, description, id } = products || {};

  return (
    <div className={styles.prdouctContainer}>
      <div className={styles.prdouctDetails}>
        <div className={styles.prdouctArrow}>
          <Link to="/">
            <FaArrowLeft />
          </Link>
        </div>
        <div className={styles.prdouctContent}>
          <img src={image} />

          <div className={styles.prdouctText}>
            <h3>{title}</h3>
            <p>{shortenParagraph(description)}</p>
          </div>
        </div>
        <div className={styles.bordertopLine}></div>

        <div className={styles.productAdd}>
          {isInCart(state, id) ? (
            <button
              className={styles.buttonDetails}
              onClick={() =>
                dispatch({ type: "INCREASE_ITEM", payload: products })
              }
            >
              <FaPlus />
            </button>
          ) : (
            <button
              className={styles.detailsAddCart}
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: products })
              }
            >
              Add to Cart
            </button>
          )}

          {itemsQuantity(state, id) >= 1 && (
            <span>{itemsQuantity(state, id)}</span>
          )}

          {itemsQuantity(state, id) === 1 && (
            <button
              className={styles.buttonDetails}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: products })
              }
            >
              <FaTrashAlt />
            </button>
          )}
          {itemsQuantity(state, id) > 1 && (
            <button
              className={styles.buttonDetails}
              onClick={() =>
                dispatch({ type: "DECREASE_ITEM", payload: products })
              }
            >
              <FaMinus />
            </button>
          )}
          <div className={styles.productSpan}>
            <span>{price} $</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
