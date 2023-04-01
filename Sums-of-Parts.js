//CodeWare link for the kyu:

// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/javascript

//Solution

const partsSums = (ls) => {
  let sum = ls.reduce((acc, val) => acc + val, 0);
  let result = [sum];
  for (let i = 0; i < ls.length; i++) {
    sum -= ls[i];
    result.push(sum);
  }

  return result;
};
