//CodeWare link for the kyu:

// https://www.codewars.com/kata/5208f99aee097e6552000148/javascript

//Solution

const solution = (string) => {
  string = string.split("").map((char) => {
    if (char === char.toUpperCase()) {
      char = " " + char;
    }
    return char;
  });
  return string.join("");
};
