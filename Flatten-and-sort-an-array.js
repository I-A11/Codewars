//CodeWare link for the kyu:

// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/javascript

//Solution

const flattenAndSort = (array) => {
  return array.flat().sort((a, b) => a - b);
};
