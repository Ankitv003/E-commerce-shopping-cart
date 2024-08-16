import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navabar";

function App() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        console.log(data);
      });
  }, []);
  // const addToCart = (id) => {
  //   productList.filter((productItem) => {
  //     return productItem.id === id;
  //   });
  // };
  return (
    <>
      <Navbar />
      <div className="product-container">
        {productList.map((productitem) => {
          return (
            <ProductCard
              image={productitem.image}
              name={productitem.title}
              price={productitem.price}
              key={productitem.id}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
