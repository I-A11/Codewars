//CodeWare link for the kyu:

// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/javascript

//Solution

const roundToNext5 = (n) => {
  if (n % 5 === 0) return n;
  return Math.ceil(n / 5) * 5;
};
