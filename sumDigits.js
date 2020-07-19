function digitSum(num) {
  function sumDigits(num, sum) {
    let lastDigit = num % 10;
    sum += lastDigit;

    if (num < 10) {
      if (sum < 10) {
        return sum;
      }
      return sumDigits(sum, (lastSum = 0));
    }

    return sumDigits((num - lastDigit) / 10, sum);
  }
  return sumDigits(num, (sum = 0));
}

console.dir(digitSum(14));
console.dir(digitSum(29));
console.dir(digitSum(999999999999));
