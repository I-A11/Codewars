//CodeWare link for the kyu:

// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

//Difficulty: 7 kyu

//Solution

const removeSmallest = (numbers) => {
  const newNumbers = numbers.slice(0);
  const minNum = Math.min(...newNumbers);
  const index = newNumbers.indexOf(minNum);
  newNumbers.splice(index, 1);
  return newNumbers;
};
