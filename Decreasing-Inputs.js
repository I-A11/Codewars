//CodeWare link for the kyu:

// https://www.codewars.com/kata/555de49a04b7d1c13c00000e/javascript

//Solution

const add = (...args) => {
  return Math.round(
    args.reduce((total, curr, index) => total + curr / (index + 1), 0)
  );
};
