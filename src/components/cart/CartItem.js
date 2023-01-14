import { getItemTotalPrice } from "../../helpers/handleCartItems";

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
export function CartItemQuantity(cartItems) {}
export function CartItemTotal(cartItems) {
  return (
    <ul>
      {cartItems.map((item) => {
        return (
          <div className="shared-height cart-total">
            <p>${getItemTotalPrice(item)}</p>
          </div>
        );
      })}
    </ul>
  );
}
