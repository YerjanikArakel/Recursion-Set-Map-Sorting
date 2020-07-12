/**
 * Function that realize Merge Sorting
 * @param {array} arr
 * @function mergeSort - makes merge sorting without change our first arr
 * @function merge @param {array, array} - makes final sorted array
 */

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let finalResult = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      finalResult.push(left[leftIndex]);
      leftIndex++;
    } else {
      finalResult.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return finalResult
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
const numbers_1 = [56, -9, 87, -23, 0, -105, 55, 150];
console.dir(mergeSort(numbers_1));
module.exports = mergeSort;
