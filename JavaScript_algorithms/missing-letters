/*My solution to FreeCodeCamp's "Missing Letters" prompt.

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = alphabet.indexOf(str[0]); i < alphabet.indexOf(str[str.length - 1]); i += 1) {  

    if (!str.match(alphabet[i]) === true) {

      return alphabet[i];
    }
  }
}
//test case
fearNotLetter("stvwx");
