function destroyer(arr, ...rest) {
  return arr.filter(item => !rest.includes(item));
}