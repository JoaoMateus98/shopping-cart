export function isAlreadyInCart(cartItems, currentGame) {
  let alreadyInCart = false;

  cartItems.map((item) => {
    if (item.id === currentGame.id) {
      alreadyInCart = true;
    }
  });

  return alreadyInCart;
}

export function incrementCart(cartItems, currentGame) {
  cartItems.map((item) => {
    if (item.id === currentGame.id) {
      item.quantity++;
      return;
    }
  });
}

export function decrementCart(cartItems, currentGame, setCartItems) {
  cartItems.map((item) => {
    if (item.id === currentGame.id) {
      if (item.quantity === 1) {
        // remove item
        const newArray = cartItems.filter((item) => item.id !== currentGame.id);
        setCartItems(newArray);
      } else {
        item.quantity--;
        return;
      }
    }
  });
}
