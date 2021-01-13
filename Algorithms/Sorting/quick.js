function quickSort(arr = [], first = 0, last = arr.length - 1) {
  let pivot;
  if (first < last) {
    pivot = getPivot(arr, first, last);
    quickSort(arr, pivot + 1, last);
    quickSort(arr, first, pivot - 1);
  }

  return arr;
}

//*****  get the position of the pivot in given array
function getPivot(arr, start, end) {
  let pivot = arr[start],
    first = start,
    last = end;

  while (first <= last) {
    while (arr[last] > pivot) last--;

    while (arr[first] <= pivot) first++;

    if (first < last) [arr[first], arr[last]] = [arr[last], arr[first]];
  }
  [arr[last], arr[start]] = [arr[start], arr[last]];

  return last;
}
