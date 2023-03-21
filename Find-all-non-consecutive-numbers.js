//CodeWare link for the kyu:

// https://www.codewars.com/kata/58f8b35fda19c0c79400020f/javascript

//Solution

const allNonConsecutive = (array) => {
  let nonConsecutive = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] + 1 !== array[i + 1]) {
      nonConsecutive.push({ i: i + 1, n: array[i + 1] });
    }
  }
  return nonConsecutive;
};
