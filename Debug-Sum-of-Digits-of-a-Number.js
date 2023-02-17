//CodeWare link for the kyu:

// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/javascript

//Solution

const getSumOfDigits = (integer) => {
  return integer
    .toString()
    .split("")
    .reduce((total, curr) => total + Number(curr), 0);
};
