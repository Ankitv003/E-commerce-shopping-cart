/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTimes,
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
                          <FontAwesomeIcon icon={faTimes} />
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

                {/* Name and Phone Number Form */}
                <form className="inputs-section" onSubmit={checkout}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Enter Your Name"
                    className="input-field"
                  />
                  <label htmlFor="number">Contact Number</label>
                  <input
                    id="number"
                    required
                    type="number"
                    placeholder="+91"
                    className="input-field phone-input"
                    pattern="[0-9]{10}"
                  />
                  <button type="submit" className="checkout-button">
                    Checkout
                  </button>
                </form>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default CartModal;
