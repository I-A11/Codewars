//CodeWare link for the kyu:

// https://www.codewars.com/kata/52f3149496de55aded000410/javascript

//Solution

const sumDigits = (number) => {
  number = Math.abs(number);
  const numArr = number.toString().split("");
  const result = numArr.reduce((total, curr) => total + Number(curr), 0);
  return result;
};
