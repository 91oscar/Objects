//Objects can contain other objects, arrays, and arrays of objects. This allows us to represent more complex data structures.

const food = [
  {
    spain: [`Paella`, `Cocido`, `Jamon serrano`],
    italy: [`Pizza`, `Pasta`, `antipasto`],
  },
  {
    pricesOfSpain: [12, 7, 30],
    pricesOfItaly: [9, 13, 5],
  },
];

console.log(
  `The price of the ${food[0].spain[1]} is ${food[1].pricesOfSpain[1]}`
);
