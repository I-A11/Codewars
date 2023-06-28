//CodeWare link for the kyu:

// https://www.codewars.com/kata/582887f7d04efdaae3000090/solutions/javascript

//Solution

const findSenior = (list) => {
  let maxAge = 0;
  let developersArray = [];

  for (let dev of list) {
    if (dev.age > maxAge) {
      maxAge = dev.age;
      developersArray = [dev];
    } else if (maxAge === dev.age) {
      developersArray.push(dev);
    }
  }
  return developersArray;
};
