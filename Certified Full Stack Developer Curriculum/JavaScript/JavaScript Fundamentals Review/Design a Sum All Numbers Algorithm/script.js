function sumAll(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}