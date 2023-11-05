// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// Solution

const titleCase = (str) => {
  const strArray = str.split(" ").map((word) => word.toLowerCase());
  const newArray = strArray
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return newArray;
};
