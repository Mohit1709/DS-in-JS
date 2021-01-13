function linear(arr = [], num) {
  for (i in arr) if (arr[i] === num) return i;

  return -1;
}
