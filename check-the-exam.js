//CodeWare link for the kyu:

// https://www.codewars.com/kata/5a3dd29055519e23ec000074/javascript

//Solution

const checkExam = (array1, array2) => {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      count += 4;
    } else if (array2[i] === "") {
      count -= 0;
    } else {
      count -= 1;
    }
  }
  if (count < 0) return 0;
  return count;
};
