/**
 * oddFunc returns true if our variable is odd and false if not
 * @param {number} n
 * @returns {boolean}
 */
const number_1 = 4211133;
const number_2 = 7791;
const number_3 = 5;

const oddFunc = (n) => {
  if (n === 0) {
    return false;
  }
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

console.dir(oddFunc(number_1));
console.dir(oddFunc(number_2));
console.dir(oddFunc(number_3));
