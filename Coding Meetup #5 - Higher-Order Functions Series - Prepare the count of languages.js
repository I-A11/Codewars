//CodeWare link for the kyu:

// https://www.codewars.com/kata/5828713ed04efde70e000346/javascript

//Solution

const countLanguages = (list) => {
  let developerObj = {};
  list.map((item) => {
    developerObj[item.language] = developerObj[item.language] + 1 || 1;
  });
  return developerObj;
};
