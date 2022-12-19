//CodeWare link for the kyu:

// https://www.codewars.com/kata/57096af70dad013aa200007b/javascript

//Solution

const logicalCalc = (array, op) => {
  if (op == "AND") return array.reduce((item, current) => item && current);
  if (op == "OR") return array.reduce((item, current) => item || current);
  if (op == "XOR") return array.reduce((item, current) => item != current);
};
