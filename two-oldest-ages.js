//CodeWare link for the kyu:

// https://www.codewars.com/kata/511f11d355fe575d2c000001/javascript

//Solution

const twoOldestAges = (ages) => {
  return ages.sort((a, b) => a - b).slice(-2);
};
