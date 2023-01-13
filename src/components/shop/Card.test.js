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
  test("renders correctly", () => {
    const { container } = render(<Card game={testGameObject} />);

    expect(container).toMatchSnapshot();
  });

  test("display game name", () => {
    render(<Card game={testGameObject} />);

    expect(
      screen.getByRole("heading", { name: testGameObject.name })
    ).toHaveTextContent(testGameObject.name);
  });

  test("card element contains all child elements", () => {
    render(<Card game={testGameObject} />);

    const cardContainer = screen.getByTestId(testGameObject.id);
    const cardImage = screen.getByRole("img");
    const cardName = screen.getByRole("heading", {
      name: testGameObject.name,
    });
    const rating = screen.getByText(
      "Metacritic Score: ".concat(testGameObject.metacritic)
    );
    const price = screen.getByText(
      "$".concat((testGameObject.rating * 10).toFixed(2))
    );
    const addToCartButton = screen.getByRole("button");

    expect(cardContainer).toContainElement(cardImage);
    expect(cardContainer).toContainElement(cardName);
    expect(cardContainer).toContainElement(rating);
    expect(cardContainer).toContainElement(price);
    expect(cardContainer).toContainElement(addToCartButton);
  });
});
