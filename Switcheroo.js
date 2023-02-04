//CodeWare link for the kyu:

// https://www.codewars.com/kata/57f759bb664021a30300007d/javascript

//Solution

const switcheroo = (x) => {
  let strArray = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "a") {
      strArray.push("b");
    } else if (x[i] === "b") {
      strArray.push("a");
    } else {
      strArray.push(x[i]);
    }
  }
  return strArray.join("");
};
