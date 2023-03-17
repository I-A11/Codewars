//CodeWare link for the kyu:

// https://www.codewars.com/kata/5a651865fd56cb55760000e0/javascript

//Solution

const arrayLeaders = (numbers) => {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < numbers.length; j++) {
      sum += numbers[j];
    }
    if (numbers[i] > sum) {
      answer.push(numbers[i]);
    }
  }
  return answer;
};
