//CodeWare link for the kyu:

//  https://www.codewars.com/kata/5626b561280a42ecc50000d1/javascript

//Solution

const sumDigPow = (a, b) => {
  numArray = [];
  for (i = a; i <= b; i++) {
    const digits = String(i).split("");
    if (
      i ===
      digits.reduce(
        (accumulator, currentValue, currentIndex) =>
          accumulator + currentValue ** (currentIndex + 1),
        0
      )
    ) {
      numArray.push(i);
    }
  }
  return numArray;
};
