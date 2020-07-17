/**
 *
 * @param {Array} arr
 * @function nestedArrConvert - take a nested array and returns one level array
 */

function nestedArrConvert(arr) {
  function arrConvert(arr, res) {
    if (arr.length === 0) {
      return res;
    }

    const [first, ...rest] = arr;

    if (typeof first === "number") {
      res.push(first);
    } else {
      arrConvert(first, res);
    }

    return arrConvert(rest, res);
  }

  return arrConvert(arr, (res = []));
}

console.dir(nestedArrConvert([1, [3, 4, [1, 2]], 10]));
console.dir(nestedArrConvert([14, [1, [[[3, []]], 1], 0]]));
