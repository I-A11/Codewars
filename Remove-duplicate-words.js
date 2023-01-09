//CodeWare link for the kyu:

// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/javascript

//Solution

const removeDuplicateWords = (s) => {
  s = s.split(" ");
  return [...new Set(s)].join(" ");
};
