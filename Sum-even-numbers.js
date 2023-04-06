//CodeWare link for the kyu:

// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/javascript

//Solution

const sumEvenNumbers = (input) => {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      result += input[i];
    }
  }
  return result;
};
