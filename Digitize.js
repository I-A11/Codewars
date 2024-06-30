// DESCRIPTION:
// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]

//Solution
const digitize = (n) => {
  const result = [];
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    result.push(Number(n[i]));
  }
  return result;
};
