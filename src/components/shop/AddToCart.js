const AddToCart = () => {
  return <button onClick={handleClick}>Add To Cart</button>;
};

export function handleClick() {
  const cartItem = createCartItem();
}

export function createCartItem(currentGame) {
  return {
    ...currentGame,
    quantity: 1,
  };
}

export default AddToCart;
