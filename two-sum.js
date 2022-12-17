//CodeWare link for the kyu:

// https://www.codewars.com/kata/52c31f8e6605bcc646000082/javascript

//Solution

const twoSum = (numbers, target) => {
  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
};
