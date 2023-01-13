import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddToCart, { handleClick, createCartItem } from "./AddToCart";
import { testGameObject } from "../../helpers/testGameObject";

let game = testGameObject;

const name = game.name;
const id = game.id;
const image = game.background_image;
const rating = game.metacritic;
const price = (game.rating * 10).toFixed(2);
game = {
  name: name,
  id: id,
  image: image,
  rating: rating,
  price: price,
};

test("creates proper cart item", () => {
  expect(createCartItem(game)).toEqual({
    ...game,
    quantity: 2,
  });
});
