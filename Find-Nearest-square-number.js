//CodeWare link for the kyu:

// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/javascript

// Name of problem: Find Nearest square number

//Solution

const nearestSq = (n) => {
  return Math.pow(Math.round(Math.sqrt(n)), 2);
};
