//CodeWare link for the kyu:

// https://www.codewars.com/kata/52761ee4cffbc69732000738/javascript

//Solution

const goodVsEvil = (good, evil) => {
  const goodArr = [1, 2, 3, 3, 4, 10];
  const evilArr = [1, 2, 2, 2, 3, 5, 10];

  const goodScore = good
    .split(" ")
    .reduce((acc, curr, i) => acc + curr * goodArr[i], 0);

  const evilScore = evil
    .split(" ")
    .reduce((acc, curr, i) => acc + curr * evilArr[i], 0);

  return goodScore > evilScore
    ? "Battle Result: Good triumphs over Evil"
    : goodScore < evilScore
    ? "Battle Result: Evil eradicates all trace of Good"
    : "Battle Result: No victor on this battle field";
};
