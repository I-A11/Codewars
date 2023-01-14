//CodeWare link for the kyu:

// https://www.codewars.com/kata/59706036f6e5d1e22d000016/javascript

//Solution

const wordsToMarks = (string) => {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    result += string[i].charCodeAt() - 96;
  }
  return result;
};
