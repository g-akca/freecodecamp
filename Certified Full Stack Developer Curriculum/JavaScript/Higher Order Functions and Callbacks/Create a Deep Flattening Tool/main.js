function steamrollArray(arr) {
  let result = [];

  function flatten(item) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        flatten(item[i]);
      }
    }
    else result.push(item);
  }

  flatten(arr);
  return result;
}