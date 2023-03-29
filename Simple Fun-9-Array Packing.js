//CodeWare link for the kyu:

// https://www.codewars.com/kata/588453ea56daa4af920000ca/javascript

//Solution

const arrayPacking = (a) => {
  return parseInt(
    a
      .map((b) => b.toString(2).padStart(8, "0"))
      .reverse()
      .join(""),
    2
  );
};
