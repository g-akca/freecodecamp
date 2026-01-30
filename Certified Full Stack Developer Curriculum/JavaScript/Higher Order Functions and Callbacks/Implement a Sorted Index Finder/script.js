function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  const index = arr.findIndex(elem => elem >= num);
  if (index == -1) {
    if (arr == []) return 0;
    else return arr.length;
  }
  else return index;
}