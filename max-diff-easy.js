//CodeWare link for the kyu:

// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/javascript

//Solution

const maxDiff = (list) => {
  const maxNum = Math.max(...list);
  const minNum = Math.min(...list);
  return list.length > 0 ? maxNum - minNum : 0;
};
