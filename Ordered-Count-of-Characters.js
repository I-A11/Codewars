//CodeWare link for the kyu:

// https://www.codewars.com/kata/57a6633153ba33189e000074/javascript

//Solution

const orderedCount = (str) => {
  return [...new Set([...str])].map((char) => [
    char,
    str.split(char).length - 1,
  ]);
};
