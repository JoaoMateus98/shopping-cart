import { countTotalQuantity } from "../../helpers/handleCartItems";

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
          <div className="item-left">
            <p className="sticky-section">Item</p>
          </div>
          <div className="item-right">
            <div className="sticky-section">
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
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
