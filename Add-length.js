//CodeWares link for the kyu:

// https://www.codewars.com/kata/559d2284b5bb6799e9000047/solutions/javascript

//Solution

const addLength = (str) => {
  return str.split(" ").map((item) => {
    return `${item} ${item.length}`;
  });
};
