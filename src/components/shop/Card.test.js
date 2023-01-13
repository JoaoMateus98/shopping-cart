import { render, screen } from "@testing-library/react";
import { testGameObject } from "../../helpers/testGameObject";
import "@testing-library/jest-dom";
import Card, { createGameObject } from "./Card";
import CartProvider from "../../helpers/CartProvider";

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
  beforeEach(() => {
    render(<CartProvider children={<Card game={testGameObject} />} />);
  });

  test("renders correctly", () => {
    const cardContainer = screen.getByTestId(testGameObject.id);

    expect(cardContainer).toMatchSnapshot();
  });

  test("display game name", () => {
    expect(
      screen.getByRole("heading", { name: testGameObject.name })
    ).toHaveTextContent(testGameObject.name);
  });

  test("card element contains all child elements", () => {
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
