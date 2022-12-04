//CodeWare link for the kyu:

// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/javascript

//Difficulty: 7 kyu

//Solution

const number = (busStops) => {
  return busStops.reduce((total, [on, off]) => total + on - off, 0);
};
