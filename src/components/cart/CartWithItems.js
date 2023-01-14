import { countTotalQuantity } from "../../helpers/handleCartItems";
import { CartItemDescription } from "./CartItem";

const CartWithItems = ({ cartItems }) => {
  return (
    <>
      <section className="cart-section">
        <div className="cart-header">
          <h1 className="sticky-section">{`Your Cart (${countTotalQuantity(
            cartItems
          )} items)`}</h1>
        </div>
        <div className="cart-items">
          <div className="cart-item-left">
            <p className="sticky-section item-title bold-section">Item</p>
            {CartItemDescription(cartItems)}
          </div>
          <div className="cart-item-right">
            <div className="cart-price">
              <p className="sticky-section item-title bold-section">Price</p>
            </div>
            <div className="cart-quantity">
              <p className="sticky-section item-title bold-section">Quantity</p>
            </div>
            <div className="cart-total">
              <p className="sticky-section item-title bold-section">Total</p>
            </div>
          </div>
        </div>
      </section>
      <section className="checkout-section">
        <div className="price-calculation-container">
          <div>
            <p className="bold-section">Subtotal:</p>
            <p>$900.57</p>
          </div>
          <div>
            <p className="bold-section">Sales Tax:</p>
            <p>$100.00</p>
          </div>
          <div id="grand-total-container">
            <p className="bold-section">Grand Total:</p>
            <p className="grand-total">$1,000.57</p>
          </div>
        </div>
        <button className="checkout-button">Check Out</button>
      </section>
    </>
  );
};

export default CartWithItems;
