//CodeWare link for the kyu:

// https://www.codewars.com/kata/564e7fc20f0b53eb02000106/javascript

//Solution

const consonantCount = (str) => {
  const string = str.replace(/[^A-Za-z]/g, "");
  if (!/^[a-zA-Z]+$/.test(string)) return +0;
  const constStr = string.toLowerCase().replace(/[aeiou]/g, "");
  return constStr.length;
};
