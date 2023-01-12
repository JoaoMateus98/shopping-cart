const Card = ({ game }) => {
  const { name, id, image, rating, price } = createGameObject(game);

  return (
    <div className="card">
      <h2>{name}</h2>
    </div>
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
