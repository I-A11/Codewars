//CodeWare link for the kyu:

// https://www.codewars.com/kata/550554fd08b86f84fe000a58/javascript

//Solution

const inArray = (array1, array2) => {
  let finalArr = [];
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (array2[i].includes(array1[j])) {
        finalArr.push(array1[j]);
      }
    }
  }
  finalArr = [...new Set(finalArr)];
  return finalArr.sort();
};
