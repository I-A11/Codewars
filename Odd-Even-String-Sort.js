//CodeWare link for the kyu:

// https://www.codewars.com/kata/580755730b5a77650500010c/javascript

//Solution

const sortMyString = (str) => {
  let evenIndex = "";
  let oddIndex = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenIndex += str[i];
    } else {
      oddIndex += str[i];
    }
  }
  return `${evenIndex} ${oddIndex}`;
};
