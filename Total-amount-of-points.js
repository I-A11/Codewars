//CodeWare link for the kyu:

// https://www.codewars.com/kata/5bb904724c47249b10000131/javascript

//Solution

const points = (games) => {
  let result = 0;
  let array = [];
  games.map((game) => {
    array.push(game.split(":"));
  });
  array.map((item) => {
    if (item[0] > item[1]) {
      result += 3;
    } else if (item[0] === item[1]) {
      result += 1;
    } else {
      result += 0;
    }
  });
  return result;
};
