/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

function convertHTML(str) {
  for (var i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case "&":
        str = str.replace(str.charAt(i), "&amp;");
        break;
      case "<":
        str = str.replace(str.charAt(i), "&lt;");
        break;
      case ">":
        str = str.replace(str.charAt(i), "&gt;");
        break;
      case '"':
        str = str.replace(str.charAt(i), "&quot;");
        break;
      case "'":
        str = str.replace(str.charAt(i), "&apos;");
        break;
    }
  }
  return str;
}

convertHTML("Dolce & Gabbana");
