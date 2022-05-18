/* Return an English translated sentence of the passed binary string.

The binary string will be space separated.
 */

function binaryAgent(str) {
  return str
    .split(" ")
    .map((num) => {
      num = parseInt(num, 2);
      return String.fromCharCode(num);
    })
    .join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

function wordToBinary(str) {
  return str
    .split("")
    .map((char) => {
      char = char.charCodeAt();
      return Number(char).toString(2);
    })
    .join(" ");
}

wordToBinary("Hey");
