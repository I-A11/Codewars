// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Return the result as a Boolean

// Input >> Output Examples
// tidyNumber (12) ==> return (true)
// Explanation:
// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

//Solution

const tidyNumber = (num) => {
  const numArray = num.toString().split("");
  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] > numArray[i + 1]) {
      return false;
    }
  }
  return true;
};
