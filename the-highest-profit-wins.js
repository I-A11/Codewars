//CodeWare link for the kyu:

// https://www.codewars.com/kata/559590633066759614000063/javascript

//Difficulty: 7 kyu

//Solution

const minMax = (arr) => {
  let result = [];
  const lowestValue = Math.min(...arr);
  const highestValue = Math.max(...arr);
  result.push(lowestValue, highestValue);
  return result;
};
