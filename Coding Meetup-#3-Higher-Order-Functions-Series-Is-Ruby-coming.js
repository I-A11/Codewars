//CodeWare link for the kyu:

// https://www.codewars.com/kata/5827acd5f524dd029d0005a4/javascript

//Solution

const isRubyComing = (list) => {
  const newObj = list.find((item) => item.language === "Ruby");
  return newObj ? true : false;
};
