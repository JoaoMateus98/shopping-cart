import { useContext } from "react";
import { CartContext } from "../../helpers/CartProvider";
import CartWithItems from "./CartWithItems";

import "./Cart.css";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return <CartWithItems cartItems={cartItems} />;
};

export default Cart;
