//CodeWare link for the kyu:

// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/javascript

//Solution

const toNumberArray = (stringArray) => {
  return stringArray.map((num) => {
    return Number(num);
  });
};
