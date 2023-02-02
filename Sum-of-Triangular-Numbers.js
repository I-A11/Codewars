//CodeWare link for the kyu:

// https://www.codewars.com/kata/580878d5d27b84b64c000b51/javascript

//Solution

const sumTriangularNumbers = (n) => {
  return n < 0 ? 0 : (n * (n + 1) * (n + 2)) / 6;
};
