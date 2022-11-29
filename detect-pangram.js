//CodeWare link for the kyu:

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript

//Difficulty: 6 kyu

//Solution

const isPangram = (string) => {
  let charArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let strLowerCaseArr = string.toLowerCase().split("");
  if (charArr.every((char) => strLowerCaseArr.includes(char))) return true;
  else return false;
};
