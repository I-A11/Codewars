//CodeWare link for the kyu:

// https://www.codewars.com/kata/544aed4c4a30184e960010f4/javascript

//Difficulty: 7 kyu

//Solution

const divisors = (integer) => {
  let divisors = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divisors.push(i);
    }
  }

  return divisors.length ? divisors : `${integer} is prime`;
};
