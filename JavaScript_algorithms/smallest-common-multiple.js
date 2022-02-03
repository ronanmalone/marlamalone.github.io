/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.
*/

function smallestCommons(arr) {
  //Sort array from smallest to largest number
  arr.sort((a, b) => a - b);

  //Create new array counting from the smallest to the largest number
  let newArr = [arr[0]];
  
  for (let x = newArr[0] + 1; x <= arr[1]; x++) {
    newArr.push(x);
  }
  //Preview the new array
  console.log(newArr);

  //Find the greatest common denominator between two numbers
  
  function gcd(a, b) {
    if (a == 0)
      return b;
    return gcd(b % a, a);
  }

  //Find the least common multiples of all numbers in array
  function LcmOfArray(newArr, idx){
    // lcm(a,b) = (a*b/gcd(a,b))
    if (idx == newArr.length-1){
      return newArr[idx];
    }
    let a = newArr[idx];
    let b = LcmOfArray(newArr, idx+1);
    return (a*b/gcd(a,b));
  }

  //Find the least common multiple of newArr starting at index 0
  let result = (LcmOfArray(newArr, 0));
  
  //Preview result
  console.log(result);
  return(result);
}

smallestCommons([15, 2]);
