//CodeWare link for the kyu:

// https://www.codewars.com/kata/56b7f2f3f18876033f000307/javascript

//Solution

const inAscOrder = (arr) => {
  const newArr = arr.slice();
  const sortedArr = newArr.sort((a, b) => a - b);
  if (sortedArr.join("") === arr.join("")) {
    return true;
  } else {
    return false;
  }
};
