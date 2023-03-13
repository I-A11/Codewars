//CodeWare link for the kyu:

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/javascript

//Solution

const findNeedle = (haystack) => {
  let needleIndex = 0;
  haystack.map((item, index) => {
    if (item === "needle") {
      needleIndex = index;
    }
  });
  return `found the needle at position ${needleIndex}`;
};
