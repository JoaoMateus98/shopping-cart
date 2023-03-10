import {
  incrementCart,
  decrementCart,
  removeCartItem,
  countTotalQuantity,
  getItemTotalPrice,
  getSubTotalPrice,
  getSalesTax,
  getGrandTotalPrice,
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

test("getItemTotal multiplies quantity by price", () => {
  const mockCartItem = {
    quantity: 5,
    price: 15.0,
  };

  expect(getItemTotalPrice(mockCartItem)).toBe("75.00");
});

test("getSubTotalPrice adds all prices and return a total amount", () => {
  const mockCartItems = [
    {
      quantity: 2,
      price: 15.0,
    },
    {
      quantity: 1,
      price: 30.0,
    },
  ];

  expect(getSubTotalPrice(mockCartItems)).toBe("60.00");
});

test("removeCartItem removes item from array", () => {
  const mockSetCartItems = jest.fn((x) => (mockCartItems = [...x]));

  const currentItem = {
    name: "item3",
    id: 49,
    quantity: 1,
  };

  removeCartItem(mockCartItems, currentItem, mockSetCartItems);

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

test("calculate sales tax of 6.5%", () => {
  const mockCartItems = [
    {
      quantity: 2,
      price: 15.0,
    },
    {
      quantity: 1,
      price: 30.0,
    },
  ];

  expect(getSalesTax(mockCartItems, 6.5)).toBe("3.90");
});

test("calculate grand total including subtotal and tax --> 63.9", () => {
  const mockCartItems = [
    {
      quantity: 2,
      price: 15.0,
    },
    {
      quantity: 1,
      price: 30.0,
    },
  ];

  expect(getGrandTotalPrice(mockCartItems, 6.5)).toBe("63.90");
});
