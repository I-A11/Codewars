//CodeWare link for the kyu:

// https://www.codewars.com/kata/53d32bea2f2a21f666000256/javascript

//Solution

const largest = (n, array) => {
  if (n === 0) return [];
  return array.sort((a, b) => a - b).slice(-n);
};
