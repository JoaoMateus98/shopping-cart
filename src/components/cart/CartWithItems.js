import { countTotalQuantity } from "../../helpers/handleCartItems";
import {
  CartItemDescription,
  CartItemPrice,
  CartItemQuantity,
  CartItemTotal,
} from "./CartItem";
import {
  getSubTotalPrice,
  getSalesTax,
  getGrandTotalPrice,
  removeAllItems,
} from "../../helpers/handleCartItems";

const CartWithItems = ({ cartItems, setCartItems }) => {
  return (
    <>
      <section className="cart-section">
        <div className="cart-header">
          <h1 className="sticky-section">{`Your Cart ( ${countTotalQuantity(
            cartItems
          )} items )`}</h1>
        </div>
        <div className="cart-items">
          <div className="cart-item-left">
            <p className="sticky-section item-title bold-section">Item</p>
            {CartItemDescription(cartItems)}
          </div>
          <div className="cart-item-right">
            <div className="cart-price">
              <p className="sticky-section item-title bold-section">Price</p>
              {CartItemPrice(cartItems)}
            </div>
            <div className="cart-quantity">
              <p className="sticky-section item-title bold-section">Quantity</p>
              {CartItemQuantity(cartItems, setCartItems)}
            </div>
            <div className="cart-total">
              <p className="sticky-section item-title bold-section">Total</p>
              {CartItemTotal(cartItems, setCartItems)}
            </div>
          </div>
        </div>
      </section>
      <section className="checkout-section">
        <div className="price-calculation-container">
          <div>
            <p className="bold-section">Subtotal:</p>
            <p>${getSubTotalPrice(cartItems)}</p>
          </div>
          <div>
            <p className="bold-section">Sales Tax:</p>
            <p>${getSalesTax(cartItems, 6.5)}</p>
          </div>
          <div id="grand-total-container">
            <p className="bold-section">Grand Total:</p>
            <p className="grand-total">${getGrandTotalPrice(cartItems, 6.5)}</p>
          </div>
        </div>
        <button
          onClick={() => {
            removeAllItems(setCartItems);
            alert("Thanks for visiting The World Of Gaming");
          }}
          className="checkout-button"
        >
          Check Out
        </button>
      </section>
    </>
  );
};

export default CartWithItems;
