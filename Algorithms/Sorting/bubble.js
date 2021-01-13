function bubble(arr = []) {
  let len = arr.length - 1;

  for (i in arr) {
    for (j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
