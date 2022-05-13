/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  var count = str.charCodeAt(str.charAt(0));
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) !== count) {
      return (str = String.fromCharCode(count));
    }
    count++;
  }
  return undefined;
}

fearNotLetter("stvwx");
