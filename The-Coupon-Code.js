//CodeWare link for the kyu:

//  https://www.codewars.com/kata/539de388a540db7fec000642/javascript

//Solution

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  return (
    enteredCode === correctCode &&
    Date.parse(expirationDate) >= Date.parse(currentDate)
  );
};
