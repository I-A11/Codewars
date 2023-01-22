//CodeWare link for the kyu:

// https://www.codewars.com/kata/57ed30dde7728215300005fa/javascript

//Solution
const bump = (x) => {
  let bumps = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "n") {
      bumps++;
    }
  }
  return bumps <= 15 ? "Woohoo!" : "Car Dead";
};
