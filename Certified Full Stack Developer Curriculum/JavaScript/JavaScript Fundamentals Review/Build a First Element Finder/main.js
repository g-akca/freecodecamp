function findElement(arr, func) {
  for (const elem of arr) {
    if (func(elem)) return elem;
  }
  return undefined;
}