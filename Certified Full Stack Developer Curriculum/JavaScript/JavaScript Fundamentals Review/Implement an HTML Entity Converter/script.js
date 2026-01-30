function convertHTML(str) {
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "&":
        str = str.replace("&", "&amp;");
        i += 4;
        break;
      case "<":
        str = str.replace("<", "&lt;");
        i += 3;
        break;
      case ">":
        str = str.replace(">", "&gt;");
        i += 3;
        break;
      case "\"":
        str = str.replace("\"", "&quot;");
        i += 5;
        break;
      case "'":
        str = str.replace("'", "&apos;");
        i += 5;
        break;
    }
  }
  return str;
}