function uniteUnique(...args) {
  let result = [];
  for (const arg of args) {
    for (let i = 0; i < arg.length; i++) {
      if (!result.includes(arg[i])) result.push(arg[i]);
    }
  }
  return result;
}