const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "steak",
    category: "lunch",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "rice",
    category: "dinner",
  },
  { name: "pasta", category: "dinner" },
  { name: "bacon", category: "lunch" },
];

const categories = menu.map((item) => item.category); //! map - get all instances
console.log(categories);

const uniqueMenu = [...new Set(categories)];
//! Set() to get unique elements
//! use spread operator to turn into array

console.log(uniqueMenu);
