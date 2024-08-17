// import { useEffect, useState } from "react";
// import ProductCard from "./components/ProductCard";
// import Navbar from "./components/Navbar";

// function App() {
//   const [productList, setProductList] = useState([]);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products/category/electronics")
//       .then((res) => res.json())
//       .then((data) => {
//         setProductList(data);
//         console.log(data);
//       });
//   }, []);
//   const addToCart = (id) => {
//     productList.filter((productItem) => {
//       return productItem.id === id;
//     });
//   };
//   return (
//     <>
//       <Navbar />
//       <div className="product-container">
//         {productList.map((productitem) => {
//           return (
//             <ProductCard
//               image={productitem.image}
//               name={productitem.title}
//               price={productitem.price}
//               key={productitem.id}
//               addToCart={addToCart}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";

function App() {
  const [productList, setProductList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [discount, setDiscount] = useState(0); // Discount percentage
  const [orderMessage, setOrderMessage] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  const addToCart = (id) => {
    const selectedProduct = productList.find(
      (productItem) => productItem.id === id
    );
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...selectedProduct, quantity: 1 }];
    });
  };

  const updateCartItem = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeCartItem(id); // Automatically remove if quantity is less than 1
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeCartItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const openCartModal = () => setShowCartModal(true);
  const closeCartModal = () => setShowCartModal(false);

  const applyDiscount = (percent) => {
    setDiscount(percent);
  };

  const checkout = () => {
    setOrderMessage(
      "Thank you for your order, your item will soon be shipped."
    );
    setTimeout(() => {
      setCartItems([]);
      setOrderMessage("");
      setShowCartModal(false);
    }, 3000); // Close modal after 3 seconds
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateDiscountedTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = subtotal * (discount / 100);
    const total = subtotal - discountAmount;
    return total >= 0 ? total : 0; // Prevent negative totals
  };

  const isAddedToCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <>
      <Navbar openCart={openCartModal} />
      <div className={`product-container ${showCartModal ? "overlay" : ""}`}>
        {productList.map((productItem) => (
          <ProductCard
            key={productItem.id}
            image={productItem.image}
            name={productItem.title}
            price={productItem.price}
            isAdded={isAddedToCart(productItem.id)}
            addToCart={() => addToCart(productItem.id)}
          />
        ))}
      </div>
      {showCartModal && (
        <CartModal
          cartItems={cartItems}
          updateCartItem={updateCartItem}
          removeCartItem={removeCartItem}
          closeCartModal={closeCartModal}
          applyDiscount={applyDiscount}
          calculateSubtotal={calculateSubtotal}
          calculateDiscountedTotal={calculateDiscountedTotal}
          checkout={checkout}
          orderMessage={orderMessage}
        />
      )}
    </>
  );
}

export default App;
