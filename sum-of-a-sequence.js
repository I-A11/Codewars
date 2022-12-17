//CodeWare link for the kyu:

// https://www.codewars.com/kata/586f6741c66d18c22800010a/solutions/javascript

//Solution

const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};
