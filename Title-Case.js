//CodeWare link for the kyu:

// https://www.codewars.com/kata/5202ef17a402dd033c000009/javascript

//Solution

const titleCase = (title, minorWords = "") => {
  if (title.length === 0) {
    return "";
  }
  let titleArray = title.toLowerCase().split(" ");
  let minorArray = minorWords.toLowerCase().split(" ");

  titleArray[0] = capitalize(titleArray[0]);

  for (let i = 1; i < titleArray.length; i++) {
    if (minorArray.indexOf(titleArray[i]) === -1) {
      titleArray[i] = capitalize(titleArray[i]);
    }
  }
  return titleArray.join(" ");
};

let capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};
