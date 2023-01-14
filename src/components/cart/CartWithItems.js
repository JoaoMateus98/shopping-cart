import { countTotalQuantity } from "../../helpers/handleCartItems";

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

export default CartWithItems;
