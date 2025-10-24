function bouncer(arr) {
  let result = [];
  for (let item of arr) {
    if (Boolean(item)) result.push(item);
  }
  return result;
}