//CodeWare link for the kyu:

// https://www.codewars.com/kata/53af2b8861023f1d88000832/javascript

//Solution

const areYouPlayingBanjo = (name) => {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
};
