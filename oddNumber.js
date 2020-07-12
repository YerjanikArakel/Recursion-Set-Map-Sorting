/**
 * oddFunc returns true if our variable is odd and false if not
 * @param {number} n
 * @returns {boolean}
 */

const oddFunc = (n) => {
  function inner(n) {
    if (n === 0) {
      return true;
    }
    if (n % 2 === 0) {
      return false;
    }

    return inner((n - (n % 10)) / 10);
  }
  return inner(n);
};

console.dir(oddFunc("315642313841"));
