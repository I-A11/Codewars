//CodeWare link for the kyu:
// https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript
// //Difficulty: 6 kyu
//Solution

const narcissistic = (value) => {
  let result = 0;
  const numArray = Array.from(String(value), Number);
  numArray.map((num) => {
    result += Math.pow(num, numArray.length);
  });
  if (value % result === 0) return true;
  else return false;
};
