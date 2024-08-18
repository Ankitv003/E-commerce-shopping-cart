/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    props.addToCart();

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h4 className="product-name">{props.name}</h4>
      <p className="product-price">
        <span id="product-price-span">${props.price}</span>
        <s>${props.price * 2}</s> <span>On Sale!</span>
      </p>
      <div className="button-box">
        {props.isAdded ? (
          <span className="added-message">
            <FontAwesomeIcon icon={faShoppingBag} /> Added to Cart
          </span>
        ) : (
          <button className="product-add-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div className="cart-popup">
          <FontAwesomeIcon icon={faCheckCircle} /> {props.name} added to cart!
        </div>
      )}
    </div>
  );
};

export default ProductCard;
