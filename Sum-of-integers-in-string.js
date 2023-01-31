//CodeWare link for the kyu:

// https://www.codewars.com/kata/598f76a44f613e0e0b000026/javascript

//Solution

const sumOfIntegersInString = (s) => {
  const justNumber = s.match(/\d+/g);
  if (justNumber === null) return 0;
  return justNumber.reduce((total, curr) => {
    curr = Number(curr);
    return total + curr;
  }, 0);
};
