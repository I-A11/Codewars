//CodeWare link for the kyu:

// https://www.codewars.com/kata/59f11118a5e129e591000134/javascript

//Solution

const repeats = (arr) => {
  let freqCounter = {};
  let numArr = [];
  for (let num of arr) {
    freqCounter[num] = freqCounter[num] + 1 || 1;
  }
  for (key in freqCounter) {
    if (freqCounter[key] === 1) {
      numArr.push(key);
    }
  }
  return numArr.reduce((total, curr) => total + Number(curr), 0);
};
