function pairElement(str) {
  let result = [];
  for (let char of str) {
    switch (char) {
      case "A":
        result.push(["A", "T"]);
        break;
      case "T":
        result.push(["T", "A"]);
        break;
      case "C":
        result.push(["C", "G"]);
        break;
      case "G":
        result.push(["G", "C"]);
        break;
    }
  }
  return result;
}