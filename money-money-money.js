//CodeWare link for the kyu:

// https://www.codewars.com/kata/542c0f198e077084c0000c2e/solutions/javascript

//Solution

const calculateYears = (principal, interest, tax, desired) => {
  let years = 0;
  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    years++;
  }
  return years;
};
