function selection(...arr) {
  //******  Checking if the parmeter is Array or rest parameter
  Array.isArray(arr[0]) ? (arr = arr[0]) : undefined;

  let len = arr.length;
  for (i = 0; i < len; i++) {
    var min = i;
    for (j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) min = j;
    }

    [arr[min], arr[i]] = [arr[i], arr[min]];
  }

  return arr;
}
