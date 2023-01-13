import { Link } from "react-router-dom";
import "./Nav.css";
import cartImage from "../images/shopping-cart.png";
import computerImage from "../images/computer.png";

const Nav = () => {
  return (
    <nav>
      <img src={computerImage} alt="" />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Marketplace</li>
        </Link>
        <Link to="/cart">
          <li>
            <img src={cartImage} alt="" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
