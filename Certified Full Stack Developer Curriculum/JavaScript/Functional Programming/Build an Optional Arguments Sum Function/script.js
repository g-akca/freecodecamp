function addTogether(...args) {
  if (args.length == 2) {
    if (typeof args[0] != "number" || typeof args[1] != "number") return undefined;
    
    return args[0] + args[1];
  }
  else if (args.length == 1) {
    if (typeof args[0] != "number") return undefined;

    return function(num) {
      if (typeof num != "number") return undefined;
      return args[0] + num;
    }
  }
}