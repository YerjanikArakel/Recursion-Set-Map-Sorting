/**
 *
 * @param {Array} arr
 * @function shiftRec - remove first element from array and return it back
 */
function shiftRec(arr) {
  const [first, ...rest] = arr;
  if (arr.length === 0) {
    return [];
  }
  return rest;
}

console.dir(shiftRec([6, 78, "n", 0, 1]));
console.dir(shiftRec([5]));
console.dir(shiftRec([]));
