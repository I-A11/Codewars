//CodeWare link for the kyu:

// https://www.codewars.com/kata/534d80775371ece88d0010b5/javascript

//Solution

const isAN = (value) => {
  return (
    (value instanceof Number || typeof value === "number") && !isNaN(value)
  );
};
