function largestOfAll(arrays) {
  let arrayOfMax = [];

  for (const arr of arrays) {
    let currentMax = arr[0];

    for (const elem of arr) {
      if (elem > currentMax) currentMax = elem;
    }
    
    arrayOfMax.push(currentMax);
  }

  return arrayOfMax;
}