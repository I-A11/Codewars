//CodeWare link for the kyu:

// https://www.codewars.com/kata/539ee3b6757843632d00026b/javascript

//Solution

const capitals = (word) => {
  const wordArr = word.split("");
  const indexArr = [];
  wordArr.map((char, index) => {
    if (char === char.toUpperCase()) {
      indexArr.push(index);
    }
  });

  return indexArr;
};
