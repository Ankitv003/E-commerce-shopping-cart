/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const CartModal = ({
  cartItems,
  updateCartItem,
  removeCartItem,
  closeCartModal,
  applyDiscount,
  calculateSubtotal,
  calculateDiscountedTotal,
  checkout,
  orderMessage,
}) => {
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-container">
        {/* Modal Header */}
        <div className="cart-modal-header">
          <button onClick={closeCartModal} className="back-button">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2>Your Cart</h2>
        </div>

        {/* Conditionally Render Order Message or Cart Items */}
        {orderMessage ? (
          <p className="order-message">{orderMessage}</p>
        ) : (
          <>
            {/* Cart Items Section */}
            {isCartEmpty ? (
              <p className="empty-cart-text">
                Your cart is empty.
                <br /> Try adding something!
              </p>
            ) : (
              <>
                <div className="cart-items-section">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cart-item-image"
                      />
                      <div className="cart-item-details">
                        <button
                          onClick={() => removeCartItem(item.id)}
                          className="remove-btn"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <p className="cart-item-name">{item.title}</p>
                        <div className="quantity-controls">
                          <button
                            onClick={() =>
                              updateCartItem(item.id, item.quantity - 1)
                            }
                            className="quantity-btn"
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateCartItem(item.id, item.quantity + 1)
                            }
                            className="quantity-btn"
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                        <p className="cart-item-price">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Summary */}
                <div className="cart-summary">
                  <div className="summary-line">
                    <span>Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="summary-line discount">
                    <span>Discount</span>
                    <span className="discount-amount">
                      $
                      {(
                        calculateSubtotal() - calculateDiscountedTotal()
                      ).toFixed(2)}
                    </span>
                  </div>
                  <div className="summary-line total">
                    <span>Total after Discount</span>
                    <span>${calculateDiscountedTotal().toFixed(2)}</span>
                  </div>
                </div>

                {/* Discount Buttons */}
                <div className="discount-buttons">
                  <button onClick={() => applyDiscount(10)}>
                    Apply 10% Discount
                  </button>
                  <button onClick={() => applyDiscount(15)}>
                    Apply 15% Discount
                  </button>
                </div>

                {/* Coupon & Phone Number Input */}
                <div className="inputs-section">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="input-field"
                  />
                  <input
                    type="tel"
                    placeholder="+91"
                    className="input-field phone-input"
                  />
                </div>

                <button onClick={checkout} className="checkout-button">
                  Checkout
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
