//CodeWare link for the kyu:

// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/javascript

//Solution

const SequenceSum = (count) => {
  if (count < 0) return `${count}<0`;
  if (count === 0) return "0=0";
  const numArr = [];
  for (let i = 0; i <= count; i++) {
    numArr.push(i);
  }
  const numStr = numArr.join("+");

  return `${numStr} = ${numArr.reduce((total, curr) => total + curr)}`;
};
