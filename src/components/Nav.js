import { Link } from "react-router-dom";
import "./Nav.css";
import cartImage from "../images/shopping-cart32.png";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>MarketPlace</li>
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
