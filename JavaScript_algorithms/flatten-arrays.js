/*
Flatten a nested array. You must account for varying levels of nesting.

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/
function steamrollArray(arr) {
  // Create empty array
  let result = [];
  /*
  Iterate through each index of arr and evaluate if the element is an array.
  If it is, go a level deeper into the array and check to see if that element is an array.
  If it is not, add that element to the result array.
  */
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...steamrollArray(arr[i]));
    } else {
    result.push(arr[i]);
    }
  }  
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
