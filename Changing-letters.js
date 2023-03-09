//CodeWare link for the kyu:

// https://www.codewars.com/kata/5831c204a31721e2ae000294/javascript

//Solution

const swap = (string) => {
  return string.replace(/[aeiou]/g, (match) => match.toUpperCase());
};
