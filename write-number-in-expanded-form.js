//CodeWare link for the kyu:

// https://www.codewars.com/kata/5842df8ccbd22792a4000245/javascript

// solution

const expandedForm = (num) => {
  let numArray = [...num.toString().split("").reverse()];
  let strArr = [];
  numArray.map((item, i) => {
    if (item !== "0") {
      strArr.push(item * 10 ** i);
    }
  });

  return strArr.reverse().join(" + ");
};
