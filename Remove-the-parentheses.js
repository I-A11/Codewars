//CodeWare link for the kyu:

// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript

//Solution

const removeParentheses = (s) => {
  return s.replace(/\([^)]*\)/g, "");
};
