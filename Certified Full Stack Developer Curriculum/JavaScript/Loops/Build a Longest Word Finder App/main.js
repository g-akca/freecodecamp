function findLongestWordLength(sentence) {
  let words = sentence.trim().split(" ");
  let maxLength = 0;
  for (let word of words) {
    if (word.length > maxLength) maxLength = word.length;
  }
  return maxLength;
}