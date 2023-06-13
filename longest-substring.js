// the problem :
// Assume s is a string of lower case characters.

// Write a program that prints the longest substring of s in which the letters occur in alphabetical order. For example, if s = 'azcbobobegghakl', then your program should print beggh

const strFun = (s) => {
  let longestSubstring = "";
  let currentSubstring = "";

  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i] >= s[i - 1]) {
      currentSubstring += s[i];
    } else {
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;
      }
      currentSubstring = s[i];
    }
  }

  if (currentSubstring.length > longestSubstring.length) {
    longestSubstring = currentSubstring;
  }

  return longestSubstring;
};

console.log(strFun("azcbobobegghakl"));
