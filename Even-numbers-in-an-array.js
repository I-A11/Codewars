//CodeWare link for the kyu:

//  https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/javascript

//Solution

const evenNumbers = (array, number) => {
  return array.filter((num) => num % 2 === 0).slice(-number);
};
