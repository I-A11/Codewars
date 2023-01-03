//CodeWare link for the kyu:

// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/javascript

//Solution

const solve = (s) => {
  let uppercase = [];
  let lowercase = [];
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      uppercase.push(s[i]);
    } else {
      lowercase.push(s[i]);
    }
  }
  if (uppercase.length > lowercase.length) {
    str = s.toUpperCase();
  } else {
    str = s.toLowerCase();
  }
  return str;
};
