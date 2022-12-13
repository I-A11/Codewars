//CodeWare link for the kyu:

// https://www.codewars.com/kata/566fc12495810954b1000030/javascript

//Solution

const nbDig = (n, d) => {
  let numArray = [];
  for (let i = 0; i <= n; i++) {
    numArray.push(i ** 2);
  }
  numArray = [...numArray.toString()];
  numArray = numArray.filter((num) => num === d.toString());
  return numArray.length;
};
