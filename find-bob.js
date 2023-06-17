// Assume s is a string of lower case characters.

// Write a program that prints the number of times the string 'bob' occurs in s. For example, if s = 'azcbobobegghakl', then your program should print

let s = "azcbobobegghakl";
let answer = 0;

const findBob = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "b" && s[i + 1] == "o" && s[i + 2] == "b") {
      answer += 1;
    }
  }
  return answer;
};

console.log(findBob("azcbobobegghakl"));
