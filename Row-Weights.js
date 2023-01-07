//CodeWare link for the kyu:

// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/javascript

//Solution

const rowWeights = (array) => {
  let weightArr = [];
  let firstRow = 0;
  let secondRow = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      firstRow += array[i];
    } else {
      secondRow += array[i];
    }
  }
  weightArr.push(firstRow, secondRow);

  return weightArr;
};
