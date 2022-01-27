import React, { useContext } from "react";
import MainShop from "react-slick";
import { Link } from "react-router-dom";
import {
  shorten,
  shortClass,
  isInCart,
  itemsQuantity,
} from "../../helpers/Helper";
import { ContextProvider } from "../datacontext/DataContextProvider";
import "./MainShop.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reducerContextProvider } from "../reducer/ReducerProducts";

import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
export default function MainShopJewel(props) {
  const DataContext = useContext(ContextProvider);
  const { state, dispatch } = useContext(reducerContextProvider);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MainShop className="productsbase" {...settings}>
      {DataContext.map(
        (items) =>
          items.category === props.category && (
            <div className="productmain" key={items.id}>
              <img
                className={`products ${shortClass(items.title)}`}
                src={items.image}
              />
              <div className="productcontent">
                <h3>{shorten(items.title)}</h3>
                <p>{items.price} $</p>
                <Link to={`/product/${items.id}`}>details</Link>
                <div className="addCartButton">
                  {itemsQuantity(state, items.id) === 1 && (
                    <button
                      className="removeButtonSelected"
                      onClick={() =>
                        dispatch({ type: "REMOVE_ITEM", payload: items })
                      }
                    >
                      <FaTrashAlt />
                    </button>
                  )}

                  {itemsQuantity(state, items.id) > 1 && (
                    <button
                      className="removeButtonSelected"
                      onClick={() =>
                        dispatch({ type: "DECREASE_ITEM", payload: items })
                      }
                    >
                      <FaMinus />
                    </button>
                  )}
                  {itemsQuantity(state, items.id) >= 1 && (
                    <span>{itemsQuantity(state, items.id)}</span>
                  )}
                  {isInCart(state, items.id) ? (
                    <button
                      className="removeButtonSelected"
                      onClick={() =>
                        dispatch({ type: "INCREASE_ITEM", payload: items })
                      }
                    >
                      <FaPlus />
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        dispatch({ type: "ADD_TO_CART", payload: items })
                      }
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
      )}
    </MainShop>
  );
}
