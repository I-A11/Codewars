//CodeWare link for the kyu:

// https://www.codewars.com/kata/57f609022f4d534f05000024/javascript

//Solution

const stray = (numbers) => {
  let numObject = {};
  let differentNum = 0;
  for (let num of numbers) {
    numObject[num] = numObject[num] + 1 || 1;
  }
  for (let key in numObject) {
    if (numObject[key] <= 1) {
      differentNum = key;
    }
  }
  return Number(differentNum);
};
