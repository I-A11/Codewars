//CodeWare link for the kyu:

// https://www.codewars.com/kata/582aafca2d44a4a4560000e7/javascript

//Solution

const keepOrder = (ary, val) => {
  let numIndex = 0;
  ary.map((num, index) => {
    if (num < val) {
      numIndex = index + 1;
    }
  });
  return numIndex;
};
