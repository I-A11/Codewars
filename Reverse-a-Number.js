//CodeWare link for the kyu:

// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/javascript

//Solution

const reverseNumber = (n) => {
  if (n < 0) {
    return Number(n.toString().split("").slice(1).reverse().join("")) * -1;
  } else {
    return Number(n.toString().split("").reverse().join(""));
  }
};
