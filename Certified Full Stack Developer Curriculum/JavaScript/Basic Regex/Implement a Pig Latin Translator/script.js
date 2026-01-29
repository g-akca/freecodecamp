function translatePigLatin(inputString) {
  const vowelRegex = /^[aeiou]/;
  const consonantClusterRegex = /^[^aeiou]+/;

  if (vowelRegex.test(inputString)) {
    return inputString + "way";
  }

  const consonantCluster = inputString.match(consonantClusterRegex);
  if (consonantCluster) {
    const cluster = consonantCluster[0];
    return inputString.slice(cluster.length) + cluster + "ay";
  }

  return inputString + "ay";
}