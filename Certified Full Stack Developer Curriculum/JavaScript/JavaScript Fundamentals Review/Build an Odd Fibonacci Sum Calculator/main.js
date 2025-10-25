function sumFibs(num) {
  let fibonacciNumbers = [0, 1];
  let currentIndex = 0;
  let sum = 0;
  while (fibonacciNumbers[currentIndex] <= num) {
    if (fibonacciNumbers[currentIndex] % 2 == 1) sum += fibonacciNumbers[currentIndex];
    currentIndex++;
    fibonacciNumbers[currentIndex + 1] = fibonacciNumbers[currentIndex] + fibonacciNumbers[currentIndex - 1];
  }
  return sum;
}