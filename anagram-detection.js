//CodeWare link for the kyu:

// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/javascript

//Solution

const isAnagram = (test, original) => {
  return (
    [...test.toLowerCase()].sort().join("").toLowerCase() ===
    [...original.toLowerCase()].sort().join("").toLowerCase()
  );
};
