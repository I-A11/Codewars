//CodeWare link for the kyu:

// https://www.codewars.com/kata/59377c53e66267c8f6000027/javascript

//Solution

const alphabetWar = (fight) => {
  const left_side = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  const right_side = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  let countRight = 0;
  let countLeft = 0;

  for (let char of fight) {
    if (char in left_side) {
      countLeft += left_side[char];
    }

    if (char in right_side) {
      countRight += right_side[char];
    }
  }

  if (countLeft > countRight) {
    return "Left side wins!";
  }

  if (countLeft < countRight) {
    return "Right side wins!";
  }

  return "Let's fight again!";
};
