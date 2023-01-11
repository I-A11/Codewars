//CodeWare link for the kyu:

// https://www.codewars.com/kata/57a049e253ba33ac5e000212/javascript

//Solution

const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
