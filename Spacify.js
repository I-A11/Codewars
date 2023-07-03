//CodeWare link for the kyu:

// https://www.codewars.com/kata/57f8ee485cae443c4d000127/javascript

//Solution

const specify = (str) => {
  str = str.split("");
  const newArr = str.map((item) => {
    return item.split("").join(" ");
  });
  return newArr.join(" ");
};
