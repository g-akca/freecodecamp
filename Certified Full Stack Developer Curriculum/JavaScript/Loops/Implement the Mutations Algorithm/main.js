function mutation(arr) {
  const firstString = arr[0].toLowerCase();
  const secondString = arr[1].toLowerCase();
  for (let i = 0; i < secondString.length; i++) {
    if (!firstString.includes(secondString[i])) return false;
  }
  return true;
}