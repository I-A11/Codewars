//CodeWare link for the kyu:

// https://www.codewars.com/kata/5784c89be5553370e000061b/javascript

//Solution

const maxProduct = (arr) => {
  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num >= max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }
  return max1 * max2;
};
