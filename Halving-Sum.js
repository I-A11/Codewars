//CodeWare link for the kyu:

// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/javascript

//Solution

const halvingSum = (n) => {
  let score = 0;
  while (n >= 1) {
    score += n;
    n = Math.floor((n * 1) / 2);
  }
  return score;
};
