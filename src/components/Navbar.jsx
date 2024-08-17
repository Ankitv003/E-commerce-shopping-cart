/* eslint-disable react/prop-types */
const Navbar = ({ openCart }) => {
  return (
    <nav className="nav">
      <img src="" alt=""></img>
      <ul className="nav-list">
        <li className="nav-lists">
          <a href="" className="nav-links">
            Home
          </a>
        </li>
        <li className="nav-lists">
          <a href="#" className="nav-links" onClick={openCart}>
            🛒Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// const Navbar = ({ openCart }) => {
//   return (
//     <nav>
//       <h1>My Store</h1>
//       <div className="cart-icon" onClick={openCart}>
//         🛒 Cart
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
