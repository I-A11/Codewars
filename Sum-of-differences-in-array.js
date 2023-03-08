//CodeWare link for the kyu:

// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/javascript

//Solution

const sumOfDifferences = (arr) => {
  let desArr = arr.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < desArr.length - 1; i++) {
    result += desArr[i] - desArr[i + 1];
  }
  return result;
};
