function frankenSplice(arr1, arr2, index) {
  if (arr2.length == 0) return arr1;
  let resultArr = [];

  for (let i = 0; i < arr2.length; i++) {
    if (i == index) {
      for (let j = 0; j < arr1.length; j++) {
        resultArr.push(arr1[j]);
      }
    }
    resultArr.push(arr2[i]);
  }

  return resultArr;
}