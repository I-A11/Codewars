//CodeWare link for the kyu:

// https://www.codewars.com/kata/550498447451fbbd7600041c/javascript

//Solution

const comp = (array1, array2) => {
  if (array1 == null || array2 == null) return false;

  let newArr = [];
  let array1Sorted = array1.sort((a, b) => a - b);
  let array2Sorted = array2.sort((a, b) => a - b);
  array2Sorted.map((num) => {
    const sqrtNum = Math.sqrt(num);
    newArr.push(sqrtNum);
  });
  return array1Sorted.toString() === newArr.toString();
};
