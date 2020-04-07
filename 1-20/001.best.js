/**
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
 */

/**
Sum of (1,2,3......n) = (n * (n + 1))/2
Sum of Multiples of k = k * (1,2,3......k/3) = (K/2) * (n/k) * ((n/k) + 1)
Result = (3 multiples + 5 multiples) - 15 multiples
*/

var output = 233168;

sumBy35 = (value) => {
  var m3 = Math.floor(value / 3);
  var m5 = Math.floor(value / 5);
  var m15 = Math.floor(value / 15);

  m3 = 3 * m3 * (m3 + 1);
  m5 = 5 * m5 * (m5 + 1);
  m15 = 15 * m15 * (m15 + 1);

  return 0.5 * (m3 + m5 - m15);
};

console.log(sumBy35(999));
