// some functions are repetive in order to limit dependecy and improve ease of tests

export function isAlreadyInCart(cartItems, currentGame) {
  let alreadyInCart = false;

  cartItems.forEach((item) => {
    if (item.id === currentGame.id) {
      alreadyInCart = true;
    }
  });

  return alreadyInCart;
}

export function incrementCart(cartItems, currentGame, setCartItems) {
  let cartCopy = [...cartItems];
  cartCopy.forEach((item) => {
    if (item.id === currentGame.id) {
      item.quantity++;
      return;
    }
  });

  setCartItems([...cartCopy]);
}

export function decrementCart(cartItems, currentGame, setCartItems) {
  const cartCopy = [...cartItems];
  let endFunction = false;

  cartCopy.forEach((item) => {
    if (item.id === currentGame.id) {
      if (item.quantity === 1) {
        removeCartItem(cartItems, currentGame, setCartItems);
        endFunction = true;
      } else {
        item.quantity--;
      }
    }
  });

  if (endFunction) {
    return;
  } else {
    setCartItems([...cartCopy]);
  }
}

export function removeCartItem(cartItems, currentGame, setCartItems) {
  let cartCopy = [...cartItems];

  cartCopy = cartCopy.filter((item) => item.id !== currentGame.id);

  setCartItems([...cartCopy]);
}

export function removeAllItems(setCartItems) {
  setCartItems([]);
}

export function countTotalQuantity(cartItems) {
  const total = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
  return total;
}

export function getItemTotalPrice(cartItem) {
  const total = (cartItem.price * cartItem.quantity).toFixed(2);
  return total;
}

export function getSubTotalPrice(cartItems) {
  const subTotal = cartItems
    .reduce(
      (accumulator, curItem) => accumulator + curItem.price * curItem.quantity,
      0
    )
    .toFixed(2);

  return subTotal;
}

export function getSalesTax(cartItems, taxPercentage) {
  const subTotal = cartItems.reduce(
    (accumulator, curItem) => accumulator + curItem.price * curItem.quantity,
    0
  );

  const salesTax = (subTotal * taxPercentage) / 100;

  return salesTax.toFixed(2);
}

export function getGrandTotalPrice(cartItems, taxPercentage) {
  const subTotal = cartItems.reduce(
    (accumulator, curItem) => accumulator + curItem.price * curItem.quantity,
    0
  );

  const salesTax = (subTotal * taxPercentage) / 100;

  return (subTotal + salesTax).toFixed(2);
}
