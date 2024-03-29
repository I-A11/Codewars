// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Solution

const largestOfFour = (arr) => {
  return arr.map((singleArr) => {
    return Math.max(...singleArr);
  });
};
