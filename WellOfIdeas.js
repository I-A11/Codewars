DESCRIPTION:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//Solution

const well = (x) => {
    let result = 0;
    for (const word of x) {
      if (word === "good") {
        result++;
      }
    }
    return result >= 1 && result <= 2
      ? "Publish!"
      : result > 2
      ? "I smell a series!"
      : "Fail!";
  };