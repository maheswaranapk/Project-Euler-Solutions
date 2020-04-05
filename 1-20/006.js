/**
 The sum of the squares of the first ten natural numbers is,
12+22+...+102=385

The square of the sum of the first ten natural numbers is,
(1+2+...+10)2=552=3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640
 */

squareSumDifference = (value) => {
  let sum = 0;
  let sumofSquares = 0;

  for (let i = 1; i <= value; i++) {
    sum = sum + i;
    sumofSquares = sumofSquares + i * i;
  }

  var squareSum = sum * sum;
  return squareSum - sumofSquares;
};

console.log(squareSumDifference(100));
