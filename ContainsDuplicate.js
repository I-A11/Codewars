// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

// Solution
const hasDuplicate = (nums) => {
  let obj = {};
  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }
  for (key in obj) {
    if (obj[key] > 1) {
      return true;
    } else {
    }
  }
  return false;
};
