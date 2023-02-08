//CodeWare link for the kyu:

// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/javascript

//Solution

const myGcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return myGcd(y, x % y);
};
