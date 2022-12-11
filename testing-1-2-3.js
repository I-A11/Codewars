//CodeWare link for the kyu:

// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/javascript

//Solution

const number = (array) => {
  let newArr = [];
  newArr = array.map((item, index) => {
    return `${index + 1}: ${item}`;
  });
  return newArr;
};
