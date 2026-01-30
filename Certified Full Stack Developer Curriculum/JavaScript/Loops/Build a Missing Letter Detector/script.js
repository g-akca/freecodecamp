function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    let prevCode = str.charCodeAt(i - 1);
    let currCode = str.charCodeAt(i);

    if (currCode != prevCode + 1) return String.fromCharCode(prevCode + 1);
  }
  return undefined;
}