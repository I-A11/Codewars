//CodeWare link for the kyu:

// https://www.codewars.com/kata/55466989aeecab5aac00003e/javascript

//Solution

const sqInRect = (len, wid) => {
  if (len === wid) return null;
  let squares = [];
  while (len !== wid) {
    let smaller = len < wid ? len : wid;
    let bigger = len > wid ? len : wid;

    squares.push(smaller);
    len = smaller;
    wid = bigger - smaller;
  }
  squares.push(len);
  return squares;
};
