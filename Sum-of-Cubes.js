//CodeWare link for the kyu:

// https://www.codewars.com/kata/59a8570b570190d313000037/javascript

//Solution

const sumCubes = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += Math.pow(i, 3);
  }
  return result;
};
