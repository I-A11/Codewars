//CodeWare link for the kyu:

// https://www.codewars.com/kata/580a4734d6df748060000045/javascript

//Solution

const isSortedAndHow = (array) => {
  const newArr = array.slice();
  const newArr2 = array.slice();
  const ascArray = newArr.sort((a, b) => a - b).join("");
  const desArray = newArr2.sort((a, b) => b - a).join("");
  return array.join("") === ascArray
    ? "yes, ascending"
    : array.join("") === desArray
    ? "yes, descending"
    : "no";
};
