const AddToCart = () => {
  return <button onClick={handleClick}>Add To Cart</button>;
};

export function handleClick() {
  const cartItem = createNewCartItem();
}

export function createNewCartItem(currentGame) {
  return {
    ...currentGame,
    quantity: 1,
  };
}

export default AddToCart;
