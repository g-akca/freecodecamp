function sumPrimes(num) {
  if (num < 2) return 0;

  let sum = 2;
  for (let i = 3; i <= num; i += 2) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) sum += i;
  }

  return sum;
}