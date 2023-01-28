//CodeWare link for the kyu:

// https://www.codewars.com/kata/535474308bb336c9980006f2/javascript

//Solution

const greet = (name) => {
  const firsLetter = name.slice(0, 1).toUpperCase();
  const lowerCaseLetters = name.toLowerCase().slice(1, name.length);
  return `Hello ${firsLetter}${lowerCaseLetters}!`;
};
