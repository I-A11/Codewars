//CodeWare link for the kyu:

// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/javascript

//Difficulty: 7 kyu

//Solution

const binaryArrayToNumber = (arr) => {
  const result = arr.join("");
  return parseInt(result, 2);
};
