//CodeWare link for the kyu:

// https://www.codewars.com/kata/59cfc000aeb2844d16000075/javascript

//Solution

const capitalize = (s) => {
  const capitalizedArr = [];
  let result = s.split("").map((char, index) => {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char;
    }
  });
  let result2 = s.split("").map((char, index) => {
    if (index % 2) {
      return char.toUpperCase();
    } else {
      return char;
    }
  });
  result = result.join("");
  result2 = result2.join("");
  capitalizedArr.push(result, result2);

  return capitalizedArr;
};
