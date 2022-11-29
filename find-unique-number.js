//CodeWare link for the kyu:

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/solutions/javascript

//Difficulty: 6 kyu

//Solution

const findUniq = (arr) => {
  let obj = {};
  for (let num of arr) {
    obj[num] = obj[num] + 1 || 1;
  }
  let uniqNum = 0;
  for (key in obj) {
    if (obj[key] <= 1) {
      uniqNum = key;
    }
  }
  return Number(uniqNum);
};
