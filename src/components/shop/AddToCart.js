import { useContext } from "react";
import { CartContext } from "../../helpers/CartProvider";
import { isAlreadyInCart, incrementCart } from "../../helpers/handleCartItems";

const AddToCart = ({ currentGame }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <button
      className="add-to-cart-button"
      onClick={() => handleClick(currentGame, cartItems, setCartItems)}
    >
      Add To Cart
    </button>
  );
};

function handleClick(currentGame, cartItems, setCartItems) {
  let alreadyInCart = false;

  alreadyInCart = isAlreadyInCart(cartItems, currentGame);

  console.log(alreadyInCart);

  if (alreadyInCart === false) {
    const newCartItem = createNewCartItem(currentGame);
    setCartItems([...cartItems, newCartItem]);
  } else {
    incrementCart(cartItems, currentGame, setCartItems);
  }

  console.log(cartItems);
}

function createNewCartItem(currentGame) {
  return {
    ...currentGame,
    quantity: 1,
  };
}

export default AddToCart;
