//CodeWare link for the kyu:

// https://www.codewars.com/kata/582746fa14b3892727000c4f/javascript

//Solution

const countDevelopers = (list) => {
  return list.filter(
    (x) => x.continent === "Europe" && x.language === "JavaScript"
  ).length;
};
