function dropElements(arr, func) {
  let i;

  for (i = 0; i < arr.length; i++) {
    if (func(arr[i])) break;
  }
  
  arr.splice(0, i);
  return arr;
}