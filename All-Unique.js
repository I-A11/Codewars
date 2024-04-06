// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

//Solution

const hasUniqueChars = (str) => {
  const charSet = new Set();
  for (let i = 0; i < str.length; i++) {
    if (charSet.has(str[i])) {
      return false;
    }
    charSet.add(str[i]);
  }
  return true;
};
