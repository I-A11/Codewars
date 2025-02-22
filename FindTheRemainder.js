const remainder = (n, m) => {
  let minNum = Math.min(n, m);
  let maxNum = Math.max(n, m);
  return maxNum % minNum;
};
