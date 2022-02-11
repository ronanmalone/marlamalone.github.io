function checkCashRegister(price, cash, cid) {
  let drawerStatus = "";
  let change = cash - price;
  let resultArr = [];
  //console.log(change);
  let changeArr = [];
  let numVal = [["PENNY", .01], ["NICKEL", .05], ["DIME", .1], ["QUARTER", .25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  //Get the total amount of change in drawer
  let cidTotal = 0;
  for (let i = 0; i <= 8; i++) {
    cidTotal += cid[i][1];
  }
  //console.log(cidTotal);
  cidTotal = Math.round(cidTotal * 100) / 100;
  if (change == cidTotal) {
    drawerStatus = "CLOSED";
    changeArr.push(...cid);
  }

  if (change > cidTotal) {
    drawerStatus = "INSUFFICIENT_FUNDS";
  }

  if (change < cidTotal) {
    drawerStatus = "OPEN";
    let temp;
    
    for (let i = 8; i >= 0; i--) {
      //If the amount of change left is bigger than the currency being evaluated
      if (change > numVal[i][1]) {
        //Temporary variable shows the max amount that could be returned from currency type (like TWENTY)
        temp = (Math.floor(change / numVal[i][1])) * numVal[i][1];
        //console.log(temp);
        //If the max amount that could be returned is more than what is in the drawer
        if (temp >= cid[i][1]) {
          //Get difference between temp and what's in the drawer
          let temp2 = temp - cid[i][1];
          //Set temp to the difference between temp and the amount that isn't available (temp2)
          temp -= temp2;
          //Add currency type and temp to change array
          changeArr.push([numVal[i][0], temp]);
        }
        //If there is more money in the drawer than temp amount
        if (temp < cid[i][1]) {
          //console.log(temp);
          //Add currency type and temp to change array
          changeArr.push([numVal[i][0], temp]);
        }
        //Calculate updated amount of change
        change -= temp;
        //Round change to the tenth decimal place
        change = Math.round((change + Number.EPSILON) * 100) / 100
        //console.log(change);
      } 
      if (change > 0 && i == 0) {
        drawerStatus = "INSUFFICIENT_FUNDS";
        changeArr = [];
      }
    }

  }

  resultArr["status"] = drawerStatus;
  resultArr["change"] = changeArr;
  console.log(resultArr);
  
  let resultObj = {...resultArr};
  
  console.log(resultObj);
  return resultObj;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
