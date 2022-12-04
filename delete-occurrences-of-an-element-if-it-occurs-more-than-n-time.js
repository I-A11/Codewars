//CodeWare link for the kyu:

// https://www.codewars.com/kata/554ca54ffa7d91b236000023/javascript

//Difficulty: 6 kyu

//Solution

const deleteNth = (arr, n) => {
  let obj = {};
  const modifiedArray = [];
  for (num of arr) {
    obj[num] = obj[num] + 1 || 1;
    if (obj[num] <= n) modifiedArray.push(num);
  }
  return modifiedArray;
};
