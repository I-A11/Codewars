//CodeWare link for the kyu:

// https://www.codewars.com/kata/5a4138acf28b82aa43000117/javascript

//Solution

const adjacentElementsProduct = (array) => {
  let result = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] * array[i + 1] > result) {
      result = array[i] * array[i + 1];
    }
  }
  return result;
};
