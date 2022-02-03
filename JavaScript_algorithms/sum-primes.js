//Write a function so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  var store = [], i, j, primes = [];
    for (i = 2; i <= num; i++) {
      if (!store[i]) {
        primes.push(i);
        for (j = i < 1; j <= num; j += i) {
          store[j] = true;
        }
      }
    }
  //preview that prime array works
  console.log(primes);

  let result = primes
    .reduce((b, c) => b + c);

  //preview result
  console.log(result);
  return result;
}

sumPrimes(10);
