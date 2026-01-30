function chunkArrayInGroups(arr, num) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i += num) {
    let subArray = arr.slice(i, i + num);
    resultArray.push(subArray);
  }
  return resultArray;
}