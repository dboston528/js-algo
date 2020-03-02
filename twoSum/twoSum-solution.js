/*
https://github.com/dboston528/js-algo.git
*/

function twoSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum == target) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

//test cases
twoSum([1, 2, 3, 4], 6);
