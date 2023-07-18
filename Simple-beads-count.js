//CodeWare link for the kyu:

// https://www.codewars.com/kata/58712dfa5c538b6fc7000569/javascript

//Solution

const countRedBeads = (n) => {
  if (n < 2) return 0;
  return (n - 1) * 2;
};
