//CodeWare link for the kyu:

// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/javascript

//Solution

const arithmetic = (a, b, operator) => {
  return operator === "add"
    ? a + b
    : operator === "subtract"
    ? a - b
    : operator === "multiply"
    ? a * b
    : a / b;
};
