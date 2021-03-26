const user = "rakin";
console.log(Array.from(user));

const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});
console.log(items);

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems;
});
console.log(newItems);
console.log(pages);
