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
export function CartItemPrice(cartItems) {}
export function CartItemQuantity(cartItems) {}
export function CartItemTotal(cartItems) {}
