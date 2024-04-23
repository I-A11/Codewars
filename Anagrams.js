// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

//Solution
const validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let key of first) {
    lookup[key] = lookup[key] + 1 || 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};
