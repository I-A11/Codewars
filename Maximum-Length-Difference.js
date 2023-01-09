//CodeWare link for the kyu:

// https://www.codewars.com/kata/5663f5305102699bad000056/javascript

//Solution

const mxdiflg = (a1, a2) => {
  let maxArray1 = [];
  let maxArray2 = [];
  if (a1.length < 1 || a2.length < 1) return -1;
  for (let i = 0; i < a1.length; i++) {
    maxArray1.push(a1[i].length);
  }
  for (let i = 0; i < a2.length; i++) {
    maxArray2.push(a2[i].length);
  }
  const max1 = Math.abs(Math.min(...maxArray1) - Math.max(...maxArray2));
  const max2 = Math.abs(Math.max(...maxArray1) - Math.min(...maxArray2));
  return max1 > max2 ? max1 : max2;
};
