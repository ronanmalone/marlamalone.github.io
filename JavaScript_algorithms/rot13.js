//WIP

function rot13(str) {
  let firstStrArr = [];
  for (let i = 0; i < str.length; i++) {
    let currentChar = str.charCodeAt(i);
    if (currentChar == /[^A-Z]/) {
      firstStrArr.push(str[i]);
    } else {
      firstStrArr.push(currentChar);
    }
  }
  
  for (let j = 0; j < firstStrArr.length; j++) {
j++;
  let charEval = firstStrArr[j];
  }

  

  console.log(firstStrArr);

  let newStr = "";
  console.log(newStr);
  return str;
}

rot13("SERR PBQR PNZC");
