//CodeWare link for the kyu:

// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/javascript

//Solution

const invert = (array) => {
  if (array.length < 1) return [];
  return array.map((num) => num * -1);
};
