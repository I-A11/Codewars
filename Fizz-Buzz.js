//CodeWare link for the kyu:

// https://www.codewars.com/kata/5300901726d12b80e8000498/javascript

//Solution

const fizz = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(i);
    }
  }
  return result;
};
