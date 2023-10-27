// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

const findLongestWordLength = (str) => {
  const wordsArray = str.split(" ").map((word) => {
    return word.length;
  });
  return Math.max(...wordsArray);
};
