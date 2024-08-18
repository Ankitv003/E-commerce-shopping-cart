/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo3.png";
const Navbar = ({ openCart }) => {
  return (
    <nav className="nav">
      <img className="nav-img" src={Logo} alt=""></img>
      <ul className="nav-list">
        <li className="nav-lists">
          <a href="" className="nav-links">
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
        </li>
        <li className="nav-lists">
          <a href="#" className="nav-links" onClick={openCart}>
            <FontAwesomeIcon icon={faCartShopping} /> Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
