//CodeWare link for the kyu:

// https://www.codewars.com/kata/54edbc7200b811e956000556/javascript

//Solution

const countSheeps = (arrayOfSheep) => {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) {
      count += 1;
    }
  }
  return count;
};
