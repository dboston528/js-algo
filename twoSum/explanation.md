✌🏾
# How to solve the Two Number Sum Alogorithm in JavaScript

## Description
Given an array integers, return indicies of the two numbers such that they add up to a specific target. Assume that each input would have exactly one solution, and may not use the same element twice. (leetcode)

One way to solve, is to write a nested for loop. This is the least optimal, but normally the first thing that comes to mind. To my understanding we want to iterate through the the array and while iterating we perform another iteration. I know that souds a bit confusing but i'll try my best to explain.


Here is empty function that takes in two parameters.

``javascript
function twoNumberSum(array, targetSum) {}
```

```javascript
function twoNumberSum(array, targetSum) {

// declare a for loop that runs as long as i is less that than the array length - 1 
for(let i = 0; i <array.length - 1; i++) {
  const firstElement = array[i];
  // within the loop declare another loop that starts exactly at the next element and runs the actuall length of the array  
   for(let j = i +1; j < array.length; j++){
   const secondElement = array[j];
   if (firstElement + secondElement === targetSum) {
    return[firstElement, sencondElement].sort((a,b)=> a-b);
    }
   }
   } 
  

}
```
