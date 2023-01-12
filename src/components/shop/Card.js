const Card = ({ game }) => {
  const { name, id, image, rating, price } = createGameObject(game);

  return (
    <section data-testid={id} className="card">
      <img
        src={image}
        alt={"Image of ".concat(name)}
        width="256"
        height="144"
      />
      <h2>{name}</h2>
      <p>{"Metacritic Score: ".concat(rating)}</p>
      <p>{price}</p>
      <button>Add To Cart</button>
    </section>
  );
};

export function createGameObject(game) {
  const name = game.name;
  const id = game.id;
  const image = game.background_image;
  const rating = game.metacritic;
  const price = (game.rating * 10).toFixed(2); // fetched item doesnt have a real price

  return {
    name: name,
    id: id,
    image: image,
    rating: rating,
    price: price,
  };
}

export default Card;
