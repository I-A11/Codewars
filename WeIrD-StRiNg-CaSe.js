//CodeWare link for the kyu:

// https://www.codewars.com/kata/52b757663a95b11b3d00062d/javascript

//Solution

const toWeirdCase = (string) => {
  return string
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((item, i) =>
          i % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
        )
        .join("")
    )
    .join(" ");
};
