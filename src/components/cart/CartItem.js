import {
  getItemTotalPrice,
  decrementCart,
  incrementCart,
  removeCartItem,
} from "../../helpers/handleCartItems";

export function CartItemDescription(cartItems) {
  return (
    <ul>
      {cartItems.map((item) => {
        return (
          <div className="shared-height cart-description">
            <img className="cart-image" src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </ul>
  );
}
export function CartItemPrice(cartItems) {
  return (
    <ul>
      {cartItems.map((item) => {
        return (
          <div className="shared-height">
            <p>${item.price}</p>
          </div>
        );
      })}
    </ul>
  );
}
export function CartItemQuantity(cartItems, setCartItems) {
  return (
    <ul>
      {cartItems.map((item) => {
        return (
          <div className="shared-height quantity-adjuster">
            <button
              onClick={() => decrementCart(cartItems, item, setCartItems)}
              className="decrement-button"
            >
              -
            </button>
            <p className="quantity-displayer">{item.quantity}</p>
            <button
              onClick={() => incrementCart(cartItems, item, setCartItems)}
              className="increment-button"
            >
              +
            </button>
          </div>
        );
      })}
    </ul>
  );
}
export function CartItemTotal(cartItems, setCartItems) {
  return (
    <ul>
      {cartItems.map((item) => {
        return (
          <div className="shared-height cart-total">
            <p>${getItemTotalPrice(item)}</p>
            <button
              onClick={() => removeCartItem(cartItems, item, setCartItems)}
              className="remove-item-button"
            >
              x
            </button>
          </div>
        );
      })}
    </ul>
  );
}
