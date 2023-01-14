import { useContext } from "react";
import { CartContext } from "../../helpers/CartProvider";
import { countTotalQuantity } from "../../helpers/handleCartItems";
import "./Cart.css";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return <CartWithItems cartItems={cartItems} />;
};

const CartWithItems = ({ cartItems }) => {
  return (
    <>
      <section className="cart-section">
        <section className="cart-header">
          <h1>{`Your Cart (${countTotalQuantity(cartItems)} items)`}</h1>
        </section>
        <section className="cart-items"></section>
      </section>
      <section className="checkout-section">
        <section></section>
        <section></section>
      </section>
    </>
  );
};

const CartItem = () => {};

// TODO: createCartWithNoItems

export default Cart;
