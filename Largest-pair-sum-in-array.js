//CodeWare link for the kyu:

//  https://www.codewars.com/kata/556196a6091a7e7f58000018/javascript

//Solution

const largestPairSum = (numbers) => {
  numbers = numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1] + numbers[numbers.length - 2];
};
