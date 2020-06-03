/* 

Odd Sum

Write a function that when given an array sums only the odd values and returns that sum. Assume the array is an array of integers.

var aData = [2, 5, 18, 19, 21]

*/

//iterate over array
//check to see if element is odd
// create a new array that takes all of the odd numbers
// get sum of new array

function oddSum(arr) {
  let newArr = [];
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2) {
      newArr.push(arr[i]);
    }
  }
  let sum = newArr.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(sum);
  // return sum;
}
oddSum([2, 5, 18, 19, 21]);
