function smallestCommons(arr) {
  function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let result = Math.min(...arr);
  for (let i = Math.min(...arr) + 1; i <= Math.max(...arr); i++) {
    result = lcm(result, i);
  }

  return result;
}