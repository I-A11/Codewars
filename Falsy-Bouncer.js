// Falsy Bouncer
// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

//Solution

const bouncer = (arr) => {
  let result = [];
  arr.map((item) => {
    if (Boolean(item)) {
      result.push(item);
    }
  });
  return result;
};
