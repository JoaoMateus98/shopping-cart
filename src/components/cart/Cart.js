import { useContext } from "react";
import { CartContext } from "../../helpers/CartProvider";
import CartWithItems from "./CartWithItems";

import "./Cart.css";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <>
      {cartItems.length === 0 ? (
        <h1 className="no-items-display">No Items In Your Cart :{"("}</h1>
      ) : (
        <CartWithItems cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </>
  );
};

export default Cart;

// (cartItems.length === 0) ? <div>`No Items In Your Cart :${"("}`</div>
// <CartWithItems cartItems={cartItems} setCartItems={setCartItems} />;
