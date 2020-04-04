/**
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
 */

var value = 600851475143;

primeFactor = (value) => {
  var factors = [];
  for (let i = 2; i <= value; i++) {
    while (value % i == 0) {
      factors.push(i);
      value = value / i;
    }
  }
  return factors;
};

var factors = primeFactor(600851475143);
console.log(factors[factors.length - 1]);
