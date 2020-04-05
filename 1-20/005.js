/**
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

findSmallestNumberDivisible = (value) => {
  var numberArray = Array.from(Array(value + 1).keys());
  numberArray.splice(0, 1);

  for (let i = 0; i < numberArray.length; i++) {
    for (j = i + 1; j < numberArray.length; j++) {
      if (numberArray[j] % numberArray[i] === 0) {
        numberArray[j] = numberArray[j] / numberArray[i];
      }
    }
  }

  var sum = 1;

  numberArray.forEach((number) => {
    sum = sum * number;
  });

  return sum;
};

console.log(findSmallestNumberDivisible(20));
