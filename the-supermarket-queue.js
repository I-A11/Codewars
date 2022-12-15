//CodeWare link for the kyu:

//  https://www.codewars.com/kata/57b06f90e298a7b53d000a86/javascript

//Solution

const queueTime = (customers, n) => {
  const tills = new Array(n).fill(0);

  for (let waitTime of customers) {
    const lowestWaitTill = tills.indexOf(Math.min(...tills));
    tills[lowestWaitTill] += waitTime;
  }

  return Math.max(...tills);
};
