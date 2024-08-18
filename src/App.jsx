import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";

function App() {
  const [productList, setProductList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [discount, setDiscount] = useState(0);
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
      removeCartItem(id);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeCartItem = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);

      if (updatedItems.length === 0) {
        setDiscount(0);
      }

      return updatedItems;
    });
  };

  const openCartModal = () => setShowCartModal(true);
  const closeCartModal = () => setShowCartModal(false);

  const applyDiscount = (percent) => {
    if (cartItems.length > 0) {
      setDiscount(percent);
    }
  };

  const checkout = (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;

    let countdown = 10;
    const timer = setInterval(() => {
      setOrderMessage(
        `Thank you for your order, ${name}! Your items will soon be shipped. We will contact you at ${number}. Closing in ${countdown}...`
      );
      countdown -= 1;
      if (countdown < 0) {
        clearInterval(timer);
        setCartItems([]);
        setDiscount(0);
        setOrderMessage("");
        setShowCartModal(false);
      }
    }, 1000);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateDiscountedTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = subtotal * (discount / 100);
    const total = subtotal - discountAmount;
    return total >= 0 ? total : 0;
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
