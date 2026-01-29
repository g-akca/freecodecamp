function spinalCase(inputString) {
  return inputString.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+|_+/g, "-").toLowerCase();
}
