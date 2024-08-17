// /* eslint-disable react/prop-types */
// import { useState } from "react";

// const CartModal = ({
//   cartItems,
//   updateCartItem,
//   removeCartItem,
//   closeCartModal,
// }) => {
//   const [discount, setDiscount] = useState(0);

//   const handleQuantityChange = (id, newQuantity) => {
//     if (newQuantity <= 0) {
//       removeCartItem(id);
//     } else {
//       updateCartItem(id, newQuantity);
//     }
//   };

//   const handleDiscountChange = (event) => {
//     setDiscount(parseFloat(event.target.value) || 0);
//   };

//   const calculateSubtotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const calculateTotal = () => {
//     const subtotal = calculateSubtotal();
//     return subtotal - discount;
//   };

//   return (
//     <div className="cart-modal">
//       <div className="cart-header">
//         <h2>Cart Summary</h2>
//         <button onClick={closeCartModal}>&times;</button>
//       </div>
//       <div className="cart-items">
//         {cartItems.map((item) => (
//           <div className="cart-item" key={item.id}>
//             <img src={item.image} alt={item.title} />
//             <div>
//               <h4>{item.title}</h4>
//               <p>Price: ${item.price}</p>
//               <div className="quantity-box">
//                 <button
//                   onClick={() =>
//                     handleQuantityChange(item.id, item.quantity - 1)
//                   }
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() =>
//                     handleQuantityChange(item.id, item.quantity + 1)
//                   }
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <button onClick={() => removeCartItem(item.id)}>Remove</button>
//           </div>
//         ))}
//       </div>
//       <div className="cart-summary">
//         <input
//           type="number"
//           placeholder="Enter discount"
//           value={discount}
//           onChange={handleDiscountChange}
//         />
//         <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
//         <p>Discount: ${discount.toFixed(2)}</p>
//         <h3>Total: ${calculateTotal().toFixed(2)}</h3>
//       </div>
//       <button className="checkout-button">Checkout</button>
//     </div>
//   );
// };

// export default CartModal;
/* eslint-disable react/prop-types */
// import { useState } from "react";

// const CartModal = ({
//   cartItems,
//   updateCartItem,
//   removeCartItem,
//   closeCartModal,
//   applyDiscount,
//   calculateSubtotal,
//   calculateDiscountedTotal,
//   checkout,
//   orderMessage,
// }) => {
//   return (
//     <div className="cart-modal">
//       <h2>Your Cart</h2>
//       {orderMessage ? (
//         <p>{orderMessage}</p>
//       ) : (
//         <>
//           {cartItems.length > 0 ? (
//             <>
//               {cartItems.map((item) => (
//                 <div key={item.id} className="cart-item">
//                   <img src={item.image} alt={item.title} />
//                   <div className="item-details">
//                     <p>{item.title}</p>
//                     <p>${item.price.toFixed(2)}</p>
//                     <div className="quantity-controls">
//                       <button
//                         onClick={() =>
//                           updateCartItem(item.id, item.quantity - 1)
//                         }
//                       >
//                         -
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button
//                         onClick={() =>
//                           updateCartItem(item.id, item.quantity + 1)
//                         }
//                       >
//                         +
//                       </button>
//                     </div>
//                     <button onClick={() => removeCartItem(item.id)}>
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//               <div className="cart-summary">
//                 <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
//                 <div className="discount-buttons">
//                   <button onClick={() => applyDiscount(10)}>
//                     Apply 10% Discount
//                   </button>
//                   <button onClick={() => applyDiscount(15)}>
//                     Apply 15% Discount
//                   </button>
//                 </div>
//                 <p>
//                   Total after Discount: ${calculateDiscountedTotal().toFixed(2)}
//                 </p>
//                 <button onClick={checkout}>Checkout</button>
//               </div>
//             </>
//           ) : (
//             <p>Your cart is empty.</p>
//           )}
//         </>
//       )}
//       <button className="close-button" onClick={closeCartModal}>
//         Close
//       </button>
//     </div>
//   );
// };

// export default CartModal;

// import React, { useState } from "react";

// const CartModal = ({ cartItems, closeCartModal, applyDiscount, checkout }) => {
//   const [orderMessage, setOrderMessage] = useState("");

//   return (
//     <div className="cart-modal-overlay">
//       <div className="cart-modal-container">
//         {/* Modal Header */}
//         <div className="cart-modal-header">
//           <button onClick={closeCartModal} className="back-button">
//             &larr;
//           </button>
//           <h2>Your Cart</h2>
//           <p className="order-message">{orderMessage}</p>
//         </div>

//         {/* Cart Items */}
//         <div className="cart-items-section">
//           {cartItems.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="cart-item-image"
//               />
//               <div className="cart-item-details">
//                 <p className="cart-item-name">{item.name}</p>
//                 <div className="quantity-controls">
//                   <button className="quantity-btn">-</button>
//                   <span>{item.quantity}</span>
//                   <button className="quantity-btn">+</button>
//                 </div>
//                 <p className="cart-item-price">${item.price.toFixed(2)}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Cart Summary */}
//         <div className="cart-summary">
//           <div className="summary-line">
//             <span>Subtotal</span>
//             <span>$99.99</span>
//           </div>
//           <div className="summary-line discount">
//             <span>Discount</span>
//             <span className="discount-amount">-$10.00</span>
//           </div>
//           <div className="summary-line total">
//             <span>Total</span>
//             <span>$89.99</span>
//           </div>
//         </div>

//         {/* Coupon & Phone Number Input */}
//         <div className="inputs-section">
//           <input
//             type="text"
//             placeholder="Enter coupon code"
//             className="input-field"
//           />
//           <input
//             type="tel"
//             placeholder="+91"
//             className="input-field phone-input"
//           />
//         </div>

//         {/* Checkout Button */}
//         <button onClick={checkout} className="checkout-button">
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartModal;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTrash,
  faArrowLeft,
  faTimes,
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

        {/* Cart Items */}
        {orderMessage?(<p className="order-message">{orderMessage}</p>):(


        <div className="cart-items-section">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.title}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateCartItem(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateCartItem(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => removeCartItem(item.id)}
                    className="remove-btn"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
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
              ${calculateSubtotal() - calculateDiscountedTotal().toFixed(2)}
            </span>
          </div>
          <div className="summary-line total">
            <span>Total after Discount</span>
            <span>${calculateDiscountedTotal().toFixed(2)}</span>
          </div>
        </div>

        {/* Discount Buttons */}
        <div className="discount-buttons">
          <button onClick={() => applyDiscount(10)}>Apply 10% Discount</button>
          <button onClick={() => applyDiscount(15)}>Apply 15% Discount</button>
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

        {/* Checkout Button */}
        <button onClick={checkout} className="checkout-button">
          Checkout
        </button>
     
        )}
         </div>
    </div>
  );
};

export default CartModal;
