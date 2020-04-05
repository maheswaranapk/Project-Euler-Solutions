/**
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
 */

isPalindrome = (number) => {
  var x = number,
    y = 0;

  while (number != 0) {
    y = y * 10 + (number % 10);
    number = Math.trunc(number / 10);
  }

  return x === y;
};

generateMax3Palindrome = () => {
  let largestpalindrome = 0;
  for (let i = 990; i > 99; i -= 11) {
    for (j = 999; j > 99; j--) {
      let productValue = i * j;
      if (largestpalindrome < productValue && isPalindrome(productValue)) {
        largestpalindrome = productValue;
      }
    }
  }

  return largestpalindrome;
};

console.log(generateMax3Palindrome());
