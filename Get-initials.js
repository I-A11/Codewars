// Given a string with two words return the initials with two upper case letters with a dot between them.

// Solution

const initials = (name) => {
  return name
    .split(" ")
    .map((item) => item[0].toUpperCase())
    .join(".");
};
