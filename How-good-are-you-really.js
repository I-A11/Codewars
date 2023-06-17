//CodeWare link for the kyu:

// https://www.codewars.com/kata/5601409514fc93442500010b/javascript

//Solution

const betterThanAverage = (classPoints, yourPoints) => {
  const classAverage =
    classPoints.reduce((total, curr) => total + curr, 0) / classPoints.length;
  return classAverage < yourPoints;
};
