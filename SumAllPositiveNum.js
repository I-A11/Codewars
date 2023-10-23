// Problem
// We are required to write a JavaScript function that takes in an array of numbers (positive and negative). Our function should calculate and return the sum of all the positive numbers present in the array.

//example of the array:
const array = [1, 2, -2, 3, 4];

// Solution 1

const positiveSumLoop = (arr) => {
  let sum = 0;
  for (num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
};

// Solution 2

const positiveSumReduce = (arr) => {
  return arr
    .filter((num) => num > 0)
    .reduce((total, current) => total + current, 0);
};
