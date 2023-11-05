// Slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// // Return the resulting array. The input arrays should remain the same after the function runs.

// Solution

const frankenSplice = (arr1, arr2, n) => {
  let sliceArray = arr2.slice();
  sliceArray.splice(n, 0, ...arr1);
  return sliceArray;
};
