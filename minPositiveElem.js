const numbers_1 = [56, -9, 87, -23, 0, -105, 55, 150];
const numbers_2 = [45, -9, 15, 5, -78];
const numbers_3 = [-5, -9, -111, -1000, -7];

const mergeSort = require("./mergeSort");

function minPositivElem(arr) {
  const res = mergeSort(arr);

  function init(res, min = -1) {
    if (res.length === 0) {
      return min;
    }

    const [first, ...rest] = res;

    if (first < 0) {
      return init(rest, min);
    } else {
      min = first;
      return min;
    }
  }
  return init(res);
}

console.dir(minPositivElem(numbers_1));
console.dir(mergeSort(numbers_3));
