function rot13(str) {
  let firstStrArr = [];
  let secondStrArr = [];
  for (let i = 0; i < str.length; i++) {
    let currentChar = str.charCodeAt(i);
    if (currentChar == /[^A-Z]/) {
      firstStrArr.push(str[i]);
    } else {
      firstStrArr.push(currentChar);
    }
  }

  for (let j = 0; j < firstStrArr.length; j++) {
  let charEval = firstStrArr[j];
  if (charEval > 64 && charEval <= 77) {
    secondStrArr.push(String.fromCharCode(charEval + 13));
  } else if (charEval > 77 && charEval <= 90) {
    let temp = 90 - charEval;
    let diff = 12 - temp;
    secondStrArr.push(String.fromCharCode(65 + diff));
  } else {
    secondStrArr.push(String.fromCharCode(charEval));
  }
  }

  let newStr = secondStrArr.join("");
  console.log(newStr);
  return newStr;
}

rot13("SERR PBQR PNZC");
