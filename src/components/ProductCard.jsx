/* eslint-disable react/prop-types */
const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h4 className="product-name">{props.name}</h4>
      <p className="product-price">Price: ${props.price}</p>
      <div className="button-box">
        <button onClick={props.addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
