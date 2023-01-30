//CodeWare link for the kyu:

// https://www.codewars.com/kata/63cbe409959401003e09978b/javascript

//Solution
const setReducer = (arr) => {
  while (arr.length - 1) {
    arr = arr.reduce((a, v, i) => {
      if (v != arr[i - 1]) a.push(1);
      else a[a.length - 1]++;
      return a;
    }, []);
  }
  return arr.pop();
};
