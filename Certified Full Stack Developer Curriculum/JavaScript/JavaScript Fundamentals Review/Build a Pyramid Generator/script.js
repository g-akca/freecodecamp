function pyramid(patternChar, rowCount, direction) {
  let result = "\n";
  if (direction) {
    for (let i = rowCount; i > 0; i--) {
      result += " ".repeat(rowCount - i) + patternChar.repeat(i * 2 - 1) + "\n";
    }
  }
  else {
    for (let i = 1; i <= rowCount; i++) {
      result += " ".repeat(rowCount - i) + patternChar.repeat(i * 2 - 1) + "\n";
    }
  }
  return result;
}