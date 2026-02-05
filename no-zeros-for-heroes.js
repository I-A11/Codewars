// Description:
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0

// Solution:

const noBoringZeros = (n) => {
  if (n === 0) return 0;
  if (n % 10 === 0) {
    return noBoringZeros(Number(n.toString().slice(0, -1)));
  }
  return n;
};
