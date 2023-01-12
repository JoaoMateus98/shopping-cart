import { render, screen } from "@testing-library/react";
import { testGameObject } from "../../helpers/testGameObject";
import "@testing-library/jest-dom";
import Card, { createGameObject } from "./Card";

test("create object with all need properties", () => {
  expect(createGameObject(testGameObject)).toEqual({
    name: testGameObject.name,
    id: testGameObject.id,
    image: testGameObject.background_image,
    rating: testGameObject.metacritic,
    price: (testGameObject.rating * 10).toFixed(2),
  });
});

describe("creates card element", () => {
  test("display game name", () => {
    render(<Card game={testGameObject} />);

    expect(
      screen.getByRole("heading", { name: testGameObject.name })
    ).toHaveTextContent(testGameObject.name);
  });
});
