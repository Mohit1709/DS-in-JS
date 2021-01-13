function binary(arr = [], num) {
  let first = 0,
    last = arr.length - 1,
    middle;

  while (first <= last) {
    middle = parseInt((first + last) / 2);

    if (arr[middle] === num) return middle;
    else if (num > arr[middle]) first = middle + 1;
    else last = middle - 1;
  }

  return -1;
}
