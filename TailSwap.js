// DESCRIPTION:
// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

//Solution
const tailSwap = (arr) => {
  let parts1 = arr[0].split(":");
  let parts2 = arr[1].split(":");

  let swapped1 = parts1[0] + ":" + parts2[1];
  let swapped2 = parts2[0] + ":" + parts1[1];

  return [swapped1, swapped2];
};
