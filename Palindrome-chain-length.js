//CodeWare link for the kyu:

// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/javascript

//Solution

// Function to check if a number is a palindrome
const isPalindrome = (num) => {
  const strNum = String(num);
  const reversedNum = strNum.split("").reverse().join("");
  return strNum === reversedNum;
};

// Function to calculate the number of special steps needed to obtain a palindrome
const palindromeChainLength = (num) => {
  let steps = 0;

  while (!isPalindrome(num)) {
    const strNum = String(num);
    const reversedNum = Number(strNum.split("").reverse().join(""));
    num += reversedNum;
    steps++;
  }

  return steps;
};
