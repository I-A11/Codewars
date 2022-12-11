//CodeWare link for the kyu:

// https://www.codewars.com/kata/5262119038c0985a5b00029f/javascript

//Solution

const isPrime = (num) => {
  if (num < 2) return false;
  let numSqrt = Math.sqrt(num);
  for (i = 2; i < numSqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
