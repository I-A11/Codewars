// DESCRIPTION:
// As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0.

//Solution
const lengthOfSequence = (arr, n) => {
  let index1 = 0;
  let index2 = 0;
  let count = 0;

  if (arr.indexOf(n) === -1) return 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      index1 = i;
      count++;
    }
  }
  for (let i = arr.length; i > 0; i--) {
    if (arr[i] === n) {
      index2 = arr.indexOf(n);
    }
  }
  if (count != 2) return 0;
  return index1 - index2 + 1;
};
