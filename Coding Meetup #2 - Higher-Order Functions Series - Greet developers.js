//CodeWare link for the kyu:

// https://www.codewars.com/kata/58279e13c983ca4a2a00002a/javascript

//Solution

const greetDevelopers = (list) => {
  const devInfo = list.map((item) => {
    let tempItem =
      (item.greeting = `Hi ${item.firstName}, what do you like the most about ${item.language}?`);
    item.greeting = tempItem;
    return item;
  });
  return devInfo;
};
