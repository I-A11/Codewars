//CodeWare link for the kyu:

// https://www.codewars.com/kata/5aba780a6a176b029800041c/javascript

//Solution 1

const maxMultiple = (divisor, bound) => {
  const maxNum = [];
  for (let i = 0; i <= bound; i++) {
    if (i % divisor === 0) {
      maxNum.push(i);
    }
  }
  return Math.max(...maxNum);
};

//Solution 2

const maxMultiple2 = (divisor, bound) => {
  return bound - (bound % divisor);
};
