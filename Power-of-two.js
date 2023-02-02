//CodeWare link for the kyu:

// https://www.codewars.com/kata/534d0a229345375d520006a0/javascript

//Solution

const isPowerOfTwo = (n) => {
  let i = 1;
  while (i < n) {
    i *= 2;
  }
  return i === n;
};
