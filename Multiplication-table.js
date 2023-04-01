//CodeWare link for the kyu:

// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/javascript

//Solution

const multiplicationTable = (n) => {
  let table = [];
  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 1; j <= n; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
};
