//CodeWare link for the kyu:

// https://www.codewars.com/kata/58daa7617332e59593000006/javascript

//Solution

const findLongest = (array) => {
  return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
};
