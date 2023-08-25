//CodeWare link for the kyu:

// https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented

//Solution

const allContinents = (list) => {
  const requiredContinents = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];
  const representedContinents = [];

  for (const developer of list) {
    if (!representedContinents.includes(developer.continent)) {
      representedContinents.push(developer.continent);
    }
  }

  return requiredContinents.every((continent) =>
    representedContinents.includes(continent)
  );
};
