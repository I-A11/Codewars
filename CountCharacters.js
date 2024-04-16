// write a function that takes a string and counts each character (lower case char and alphaNumeric) in the string.
// solution

const charCount = (str) => {
  const resultObject = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      resultObject[char] = ++resultObject[char] || 1;
    }
  }
  return resultObject;
};

const isAlphaNumeric = (char) => {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
};
