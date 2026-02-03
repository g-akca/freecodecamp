function permuteString(str, prefix="", results=[]) {
  if (str.length == 0) {
    results.push(prefix);
    return results;
  }

  const used = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (used.has(char)) continue;
    used.add(char);

    const remaining = str.slice(0, i) + str.slice(i + 1);
    permuteString(remaining, prefix + char, results);
  }

  return results;
}