//CodeWare link for the kyu:

// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/javascript

//Solution

const minValue = (values) => {
  let valuesArr = new Set(values);
  valuesArr = [...valuesArr];
  return Number(valuesArr.sort((a, b) => a - b).join(""));
};
