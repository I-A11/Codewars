//Reverse a String
//Reverse the provided string and return the reversed string.
//For example, "hello" should become "olleh".

//Solution

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
