//CodeWare link for the kyu:

//  https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/javascript

//Solution

const sumOfMinimums = (arr) => {
  return arr.reduce((a, b) => a + Math.min(...b), 0);
};
