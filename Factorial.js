//CodeWare link for the kyu:

// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/javascript

//Solution

const factorial = (n) => {
  let result = 1;
  if (n === 0) return 1;
  if (n < 0 || n > 12) throw RangeError;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
