function checkSort(arr) {
  function lastCheck(arr, indx) {
    if (arr.length === 1) {
      return "-1";
    }

    const [first, next] = arr;

    if (first <= next) {
      const [first, ...rest] = arr;
      return lastCheck(rest, (indx += 1));
    }

    return indx + 1;
  }

  return lastCheck(arr, (indx = 0));
}

console.dir(checkSort([2, 12, 15, 48, 64]));
console.dir(checkSort([-9, -4, -4, 3, 12, 4, 5]));
