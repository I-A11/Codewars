//CodeWare link for the kyu:

// https://www.codewars.com/kata/58287977ef8d4451f90001a0/javascript

//Solution

const isSameLanguage = (list) => {
  let languageArray = [];
  list.map((item) => languageArray.push(item.language));
  languageArray = Array.from(new Set(languageArray));
  return languageArray.length === 1 ? true : false;
};
