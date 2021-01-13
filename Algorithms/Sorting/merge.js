function mergeSort(arr = [], first = 0, last = arr.length - 1) {
  if (first < last) {
    let mid = parseInt((first + last) / 2);
    mergeSort(arr, first, mid);
    mergeSort(arr, mid + 1, last);
    sort(arr, first, mid, last);
  }
  return arr;
}

function sort(arr, start, mid, end) {
  let res = [],
    i = start,
    j = mid + 1,
    k = 0;

  while (mid >= i && end >= j) {
    arr[i] < arr[j] ? (res[k++] = arr[i++]) : (res[k++] = arr[j++]);
  }

  if (i <= mid) {
    while (mid >= i) res[k++] = arr[i++];
  } else {
    while (end >= j) res[k++] = arr[j++];
  }

  let temp = 0;
  for (i = start; i <= end; i++) {
    arr[i] = res[temp++];
  }
}
