//CodeWare link for the kyu:

// https://www.codewars.com/kata/57eaec5608fed543d6000021/javascript

//Solution

const divCon = (x) => {
  const numArray = [];
  const stringArray = [];
  x.map((num) => {
    if (typeof num === "number") {
      numArray.push(num);
    } else {
      stringArray.push(+num);
    }
  });

  return (
    numArray.reduce((total, curr) => total + curr, 0) -
    stringArray.reduce((total, curr) => total + curr, 0)
  );
};
