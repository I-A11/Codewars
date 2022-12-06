//CodeWare link for the kyu:

// https://www.codewars.com/kata/5949481f86420f59480000e7/javascript

//Difficulty: 7 kyu

//Solution

const oddOrEven = (array) => {
  let result = 0;
  array.map((num) => {
    result += num;
  });
  return result % 2 ? "odd" : "even";
};
