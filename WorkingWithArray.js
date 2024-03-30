// In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

// Solution

const withoutLast = (arr) => {
  let arr2 = arr.slice();
  arr2.pop();
  return arr2;
};
