//CodeWare link for the kyu:

// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/javascript

//Solution

const bouncingBall = (h, bounce, window) => {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let result = 1;
    h = h * bounce;
    while (h > window) {
      result += 2;
      h = h * bounce;
    }
    return result;
  } else return -1;
};
