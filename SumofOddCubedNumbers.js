// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

//Solution

const cubeOdd = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return undefined;
    }
    if (arr[i] % 2) {
      sum += arr[i] * arr[i] * arr[i];
    }
  }
  return sum;
};
