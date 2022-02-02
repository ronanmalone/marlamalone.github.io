/* Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities. */
function convertHTML(str) {

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '&':
        str = (str.replace('&', ('&amp;')));
        break;
      case '<':
        str = (str.replace('<', ('&lt;')));
        break;
      case '>':
        str = (str.replace('>', ('&gt;')));
        break;
      case '"':
        str = (str.replace('"', ('&quot;')));
        break;
      case "'":
        str = (str.replace("'", ('&apos;')));
        break;
    } 
  }
  return str;
}

convertHTML("Dolce & Gabbana");
