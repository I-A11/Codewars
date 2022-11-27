// https://www.codewars.com/kata/5552101f47fc5178b1000050

//Solution

const digPow = (n, p) => {
  let result = 0;
  const numArray = Array.from(String(n), Number);
  numArray.map((num, i) => {
    result += Math.pow(num, i + p);
  });
  if (result % n === 0) return result / n;
  else return -1;
};
