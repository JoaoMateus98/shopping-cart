import {
  incrementCart,
  decrementCart,
  countTotalQuantity,
} from "./handleCartItems";

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

beforeEach(() => {
  mockCartItems = [
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
});

test("increment cart adds one to quantity", () => {
  const mockSetCartItems = jest.fn((x) => (mockCartItems = x));

  const currentItem = {
    name: "item1",
    id: 10,
    quantity: 2,
  };

  incrementCart(mockCartItems, currentItem, mockSetCartItems);

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
  const mockSetCartItems = jest.fn((x) => (mockCartItems = x));

  const currentItem = {
    name: "item2",
    id: 22,
    quantity: 8,
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
      quantity: 7,
    },
    {
      name: "item3",
      id: 49,
      quantity: 1,
    },
  ]);
});

test("countTotalQuantity adds all quantity to 11", () => {
  expect(countTotalQuantity(mockCartItems)).toBe(11);
});
