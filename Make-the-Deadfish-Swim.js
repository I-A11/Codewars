//CodeWare link for the kyu:

//  https://www.codewars.com/kata/51e0007c1f9378fa810002a9/javascript

//Solution

const parse = (data) => {
  let count = 0;
  let arr = [];
  data.split("").forEach((num) => {
    if (num === "i") {
      count++;
    } else if (num === "d") {
      count--;
    } else if (num === "s") {
      count = count * count;
    } else if (num === "o") {
      arr.push(count);
    }
  });

  return arr;
};
