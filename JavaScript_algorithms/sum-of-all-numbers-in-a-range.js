/* Return the sum of two numbers plus the sum of all the numbers between them.
The lowest number will not always come first. */

function sumAll(arr) {
  var arrMax = Math.max(...arr);
  var arrMin = Math.min(...arr);
  let arrSum = arrMin;

  for (let i = arrMin; i < arrMax; i++) {
    arrSum += i + 1;
  }

  return arrSum;
}
//test function
sumAll([5, 10]);
