//CodeWare link for the kyu:

// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/javascript

//Solution

const sameCase = (a, b) => {
  if (
    /[a-zA-Z]/.test(a) &&
    /[a-zA-Z]/.test(b) &&
    a.toUpperCase() === a &&
    b.toUpperCase() === b
  )
    return 1;
  if (
    /[a-zA-Z]/.test(a) &&
    /[a-zA-Z]/.test(b) &&
    a.toLowerCase() === a &&
    b.toLowerCase() === b
  )
    return 1;
  if (/[a-zA-Z]/.test(a) && /[a-zA-Z]/.test(b)) return 0;
  else return -1;
};
