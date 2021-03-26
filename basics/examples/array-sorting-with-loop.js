let list = [1, 12, 5, 4, 9, 3, 2, 8, 10, 7, 11, 6];

let listLength = list.length - 1;

0;

for (let i = 0; i < listLength; i++) {
  for (let j = 0; j < listLength; j++) {
    if (list[j] > list[j + 1]) {
      [list[j], list[j + 1]] = [list[j + 1], list[j]];
    }
  }
}
console.log(list);
