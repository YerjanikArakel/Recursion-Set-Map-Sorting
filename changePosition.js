function changePosition(arr, number) {
  function changePositionNum(arr, number) {
    if (number === 0) {
      return arr;
    }

    if (number > 0) {
      const [first, ...rest] = arr;
      rest.push(first);

      return changePositionNum(rest, number - 1);
    } else {
      arr.unshift(arr.pop());
      return changePositionNum(arr, number + 1);
    }
  }

  return changePositionNum(arr, number);
}

changePosition(["a", "b", "c", "d", "e", "f", "g", "h"], 3);
changePosition(["a", "b", "c", "d", "e", "f", "g", "h"], -2);
