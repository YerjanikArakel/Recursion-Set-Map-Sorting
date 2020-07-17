/**
 * @param setA, setB, setC {Set}
 * @param union{Set} makes one big Set from given sets
 * @function summetricDifference{} is cutting existing member in Set
 * @function difference find difference from two Sets
 */

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);
let union = new Set([...setA, ...setC]);

const symmetricDifference = (set1, set2) => {
  let res = new Set();
  for (let item of union.values()) {
    if (!set2.has(item) || !set1.has(item)) {
      res.add(item);
    }
  }
  return res;
};

const difference = (set1, set2) => {
  let res = new Set();
  for (let item of set1.values()) {
    if (!set2.has(item)) {
      res.add(item);
    }
  }
  return res;
};

symmetricDifference(setA, setC); // => Set [1, 2, 5, 6]
difference(setA, setC); // => Set [1, 2]
