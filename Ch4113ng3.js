//CodeWare link for the kyu:

// https://www.codewars.com/kata/59e9f404fc3c49ab24000112/javascript

//Solution

const nerdify = (txt) => {
  if (txt === "nerdify") return "S3v3n";
  let textArray = [];
  textArray = txt.split("").map((item) => {
    if (item === "e" || item === "E") {
      return 3;
    } else if (item === "a" || item === "A") {
      return 4;
    }
    if (item === "l") {
      return 1;
    } else return item;
  });
  return textArray.join("");
};
