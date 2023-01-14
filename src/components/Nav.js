import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import cartImage from "../images/shopping-cart.png";
import computerImage from "../images/computer.png";
import { CartContext } from "../helpers/CartProvider";
import { countTotalQuantity } from "../helpers/handleCartItems";

const Nav = () => {
  const [totalInCart, setTotalInCart] = useState(0);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    if (cartItems.length > 0) {
      setTotalInCart(countTotalQuantity(cartItems));
    }
  });

  return (
    <nav>
      <img src={computerImage} alt="" />
      <ul>
        <Link to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/shop">
          <li className="nav-link">Marketplace</li>
        </Link>
        <Link to="/cart">
          <li className="cart-container">
            {totalInCart === 0 ? (
              <></>
            ) : (
              <div className="total-container">
                <p className="cart-total">{totalInCart}</p>
              </div>
            )}
            <img className="nav-img" src={cartImage} alt="" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
