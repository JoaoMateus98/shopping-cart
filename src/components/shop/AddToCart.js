import { useContext } from "react";
import { CartContext } from "../../helpers/CartProvider";

const AddToCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  return <button onClick={() => handleClick(cartItems)}>Add To Cart</button>;
};

// TODO: cartITems has current game ?
// incrementCartItem : createNewCartItem
export function handleClick(cartItems) {
  let cartItem = createNewCartItem();
}

export function createNewCartItem(currentGame) {
  return {
    ...currentGame,
    quantity: 1,
  };
}

export default AddToCart;
