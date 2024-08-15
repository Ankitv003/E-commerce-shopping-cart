/* eslint-disable react/prop-types */
const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h4 className="product-name">{props.name}</h4>
      <p>Price: ${props.price}</p>
      <div className="button-box">
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        <button>View Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
