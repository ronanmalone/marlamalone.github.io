function checkCashRegister(price, cash, cid) {
  
  let statMap = new Map();
  let statCases = "";
  let change = cash - price;
  console.log(change);

  //Get the total amount of change in drawer
  let cidTotal = 0;
  for (let i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1];
  }
  cidTotal = Math.round(cidTotal * 100) / 100;
  console.log(cidTotal);

  let changeArr = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  if (change == cidTotal) {
    statCases = "CLOSED";
  }

  if (change >= cidTotal) {
    statCases = "INSUFFICIENT_FUNDS";
  }

  if (change < cidTotal) {
    
    statCases = "OPEN";

    changeArr[8][1] = change - cid[8][1];
    
  }

  //Switch cases that will set statMap keys and values
  //to be returned at the end.
  switch (statCases) {
    case "INSUFFICIENT_FUNDS":
      statMap.set('status', "INSUFFICIENT_FUNDS");
      statMap.set('change', "[]");
      break;
    case "CLOSED":
      statMap.set('status', "CLOSED");
      statMap.set('change', cidTotal);
      break;
    case "OPEN":
      statMap.set('status', "OPEN");
      statMap.set('change', changeArr.map(changeArr));
      break;
  }
  
  console.log(statMap);
  //return statArr;
}

checkCashRegister(19.5, 120, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
