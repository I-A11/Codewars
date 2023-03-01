//CodeWare link for the kyu:

// https://www.codewars.com/kata/563fb342f47611dae800003c/javascript

//Solution

const trim = (str, size) => {
  if (str.length <= 1) {
    return `${str.slice(0, size)}...`;
  }
  if (str.length <= size) {
    return str.slice(0, size);
  }
  if (size <= 3) {
    return `${str.slice(0, size)}...`;
  }
  return `${str.slice(0, size - 3)}...`;
};
