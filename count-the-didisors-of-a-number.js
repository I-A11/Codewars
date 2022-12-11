//CodeWare link for the kyu:

// https://www.codewars.com/kata/542c0f198e077084c0000c2e/solutions/javascript

//Solution

const getDivisorsCnt = (n) => {
  let divisorsArray = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisorsArray.push(i);
    }
  }
  return divisorsArray.length;
};
