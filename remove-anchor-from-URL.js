//CodeWare link for the kyu:

// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/javascript

//Solution

const removeUrlAnchor = (url) => {
  const index = url.indexOf("#");
  if (!url.includes("#")) return url;
  return url.slice(0, index);
};
