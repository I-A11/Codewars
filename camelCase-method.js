//CodeWare link for the kyu:

// https://www.codewars.com/kata/587731fda577b3d1b0001196/javascript

//Solution

String.prototype.camelCase = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};
