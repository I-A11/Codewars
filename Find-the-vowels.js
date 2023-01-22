//CodeWare link for the kyu:

// https://www.codewars.com/kata/5680781b6b7c2be860000036/javascript

//Solution

const vowelIndices = (word) => {
  let vowelArray = [];
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u" ||
      word[i] === "y"
    ) {
      vowelArray.push(i + 1);
    }
  }
  return vowelArray;
};
