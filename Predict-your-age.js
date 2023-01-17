//CodeWare link for the kyu:

// https://www.codewars.com/kata/5aff237c578a14752d0035ae/javascript

//Solution

const predictAge = (age1, age2, age3, age4, age5, age6, age7, age8) => {
  let resultArr = [
    age1 * age1,
    age2 * age2,
    age3 * age3,
    age4 * age4,
    age5 * age5,
    age6 * age6,
    age7 * age7,
    age8 * age8,
  ];
  resultArr = resultArr.reduce((total, curr) => total + curr, 0);
  return Math.floor(Math.sqrt(resultArr) / 2);
};
