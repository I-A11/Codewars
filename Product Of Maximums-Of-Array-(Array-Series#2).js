//CodeWare link for the kyu:

// https://www.codewars.com/kata/5a63948acadebff56f000018/javascript

//Solution

const maxProduct = (numbers, size) => {
  const sortedArray = numbers.sort((a, b) => b - a);
  return sortedArray.slice(0, size).reduce((total, curr) => total * curr, 1);
};
