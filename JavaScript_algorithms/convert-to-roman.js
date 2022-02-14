// Converts numbers less than 4000 to Roman numerals

function convertToRoman(num) {
  const romanMap = new Map()
  romanMap.set(1, "I");
  romanMap.set(5, "V");
  romanMap.set(10, "X");
  romanMap.set(50, "L");
  romanMap.set(100, "C");
  romanMap.set(500, "D");
  romanMap.set(1000, "M");
  
  //console.log(romanMap);
  let romanNum = "";
  let numArr = (num.toString().split(""));
  
  if (num >= 4000) {
    console.log("Please input a number less than 4000.")
  }

  //Number less than 4000
  if (numArr.length == 4) {
    let numFocThou = parseInt(numArr[0]) * 1000;
    let m = 1000;
    if (numFocThou == 1000) {
      romanNum += "M";
    }
    if (numFocThou > 1000 && numFocThou < 4000) {
      while (m <= numFocThou) {
      romanNum += romanMap.get(1000);
      m += 1000;
      }
    }
    numArr.shift();
  } 
  
  //Number less than 1000
  if (numArr.length == 3) {
    let numFocHun = parseInt(numArr[0]) * 100;
    let k = 100;
    //console.log(numFocHun);
    if (numFocHun == 0) {
      romanNum += "";
    }
    if (numFocHun > 0 && numFocHun < 400) {
      while (k <= numFocHun) {
      romanNum += romanMap.get(100);
      k += 100;
      }
    }
    if (numFocHun == 400) {
      romanNum += "CD";
    }
    if (numFocHun == 500) {
      romanNum += romanMap.get(500);
    }
    if (numFocHun > 500 && numFocHun < 900) {
      romanNum += romanMap.get(500);
      let temp = (numFocHun - 500);
      //console.log(temp);
      while (k <= temp) {
        romanNum += romanMap.get(100);
        k += 100;
      }
    }
    if (numFocHun == 900) {
      romanNum += "CM";
    }
    numArr.shift();
    //console.log(romanNum);
  }
  
  //Number less than 100
  if (numArr.length == 2) {
    let numFocTen = parseInt(numArr[0]) * 10;
    let j = 10;
    //console.log(numFocTen);
    if (numFocTen == 0) {
      romanNum += "";
    }
    if (numFocTen > 0 && numFocTen < 40) {
      while (j <= numFocTen) {
      romanNum += romanMap.get(10);
      j += 10;
      }
    }
    if (numFocTen == 40) {
      romanNum += "XL";
    }
    if (numFocTen == 50) {
      romanNum += romanMap.get(50);
    }
    if (numFocTen > 50 && numFocTen < 90) {
      romanNum = romanMap.get(50);
      let temp = (numFocTen - 50);
      //console.log(temp);
      while (j <= temp) {
        romanNum += romanMap.get(10);
        j += 10;
      }
    }
    if (numFocTen == 90) {
      romanNum += "XC";
    }
    numArr.shift();
    //console.log(romanNum);
  }

  //Number less than 10
  if (numArr.length == 1) {
    let numFoc = parseInt(numArr[0]);
    let i = 1;
    
    if (numFoc == 0) {
      romanNum += "";
    }
    if (numFoc > 0 && numFoc < 4) {
      while (i <= numFoc) {
      romanNum += romanMap.get(1);
      i++;
      }
    }
    if (numFoc == 4) {
      romanNum += "IV";
    }
    if (numFoc == 5) {
      romanNum += romanMap.get(5);
    }
    if (numFoc > 5 & numFoc < 9) {
      romanNum += romanMap.get(5);
      let temp = numFoc - 5;
      while (i <= temp) {
        romanNum += romanMap.get(1);
        i++;
      }
    }
    if (numFoc == 9) {
      romanNum += "IX";
    }
  }

  return romanNum;
}

convertToRoman(500);
