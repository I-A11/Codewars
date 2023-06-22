//CodeWare link for the kyu:

// https://www.codewars.com/kata/5827bc50f524dd029d0005f2/javascript

//Solution

const getFirstPython = (list) => {
  const devInfo = list.find((item) => item.language === "Python");
  return devInfo
    ? `${devInfo.firstName}, ${devInfo.country}`
    : "There will be no Python developers";
};
