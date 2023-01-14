import { incrementCart, decrementCart } from "./handleCartItems";

test("increment cart adds one to quantity", () => {
  const mockCartItems = [
    {
      name: "item1",
      id: 10,
      quantity: 2,
    },
    {
      name: "item2",
      id: 22,
      quantity: 8,
    },
    {
      name: "item3",
      id: 49,
      quantity: 1,
    },
  ];

  const currentItem = {
    name: "item1",
    id: 10,
    quantity: 2,
  };

  incrementCart(mockCartItems, currentItem);

  expect(mockCartItems).toEqual([
    {
      name: "item1",
      id: 10,
      quantity: 3,
    },
    {
      name: "item2",
      id: 22,
      quantity: 8,
    },
    {
      name: "item3",
      id: 49,
      quantity: 1,
    },
  ]);
});

test("decrement cart item quantity by one", () => {
  const mockCartItems = [
    {
      name: "item1",
      id: 10,
      quantity: 2,
    },
    {
      name: "item2",
      id: 22,
      quantity: 8,
    },
    {
      name: "item3",
      id: 49,
      quantity: 1,
    },
  ];

  const currentItem = {
    name: "item2",
    id: 22,
    quantity: 8,
  };

  decrementCart(mockCartItems, currentItem);

  expect(mockCartItems).toEqual([
    {
      name: "item1",
      id: 10,
      quantity: 2,
    },
    {
      name: "item2",
      id: 22,
      quantity: 7,
    },
    {
      name: "item3",
      id: 49,
      quantity: 1,
    },
  ]);
});

test("remove cart item if quantity is 0", () => {
  let mockCartItems = [
    {
      name: "item1",
      id: 10,
      quantity: 2,
    },
    {
      name: "item2",
      id: 22,
      quantity: 8,
    },
    {
      name: "item3",
      id: 49,
      quantity: 1,
    },
  ];

  const mockSetCartItems = jest.fn((x) => (mockCartItems = x));

  const currentItem = {
    name: "item3",
    id: 49,
    quantity: 1,
  };

  decrementCart(mockCartItems, currentItem, mockSetCartItems);

  expect(mockCartItems).toEqual([
    {
      name: "item1",
      id: 10,
      quantity: 2,
    },
    {
      name: "item2",
      id: 22,
      quantity: 8,
    },
  ]);
});
