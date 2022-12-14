//CodeWare link for the kyu:

// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/javascript

// solution

const gimme = (triplet) => {
  if (
    (triplet[0] > triplet[1] && triplet[0] < triplet[2]) ||
    (triplet[0] < triplet[1] && triplet[0] > triplet[2])
  )
    return 0;

  if (
    (triplet[1] > triplet[0] && triplet[1] < triplet[2]) ||
    (triplet[1] < triplet[0] && triplet[1] > triplet[2])
  )
    return 1;
  if (
    (triplet[2] > triplet[0] && triplet[2] < triplet[1]) ||
    (triplet[2] < triplet[0] && triplet[2] > triplet[1])
  )
    return 2;
};
