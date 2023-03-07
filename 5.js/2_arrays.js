// QUESTION 1: Write a function that takes one Array parameter and returns true if the parameter is empty, false if not

// EXAMPLES:
// console.log("testing out my function for Q1: ", isEmpty([]));
//    should result in the next line appearing in your console...
// true
//
// OR if you pass an array that is not empty...
// console.log("testing out my function for Q1: ", isEmpty([1,"a","test"]));
// false

function isEmpty(array) {
  if (array.length == 0) {
    return true;
  }
    return false;
}
console.log("testing out my function for Q1: ", isEmpty([]));

// QUESTION 2: Write a function that takes one Array parameter and one Number parameter and returns 
//the element in the array at the given number index, null if it doesn't exist

// EXAMPLES:
// console.log("testing out my function for Q2: ", getElementAt([1,"a","test"], 2));
//    should result in the next line appearing in your console...
// test
//
// OR if you pass an number greater than the number of items in the array...
// console.log("testing out my function for Q2: ", getElementAt([1,"a"], 2));
// null

function getElementAt(arr,ind) {
  if(arr.length > ind && ind >= 0){
    return arr[ind]
  }else{

 return null
 }
}

console.log("testing out my function for Q2: ", getElementAt([1,"a", 4], 2));

// QUESTION 3: Write a function that takes one Array parameter, inserts the value `0` 
//at the second position in the array, and returns the new Array

// EXAMPLE:
// console.log("testing out my function for Q3: ", insertZeroInArray([1,"a","test"]));
//    should result in the next line appearing in your console...
// [1, 0, 'a', 'test']
let arr = [1,"a","test"]
function insertZeroInArray(arr) {
  let arr1 = arr.splice(1, 0, 0)
  
  return arr;

}
console.log("testing out my function for Q3: ", insertZeroInArray(arr));


// QUESTION 4: Write a function that takes two Array parameters 
//(containing numbers or strings only) and returns true if they are equal, false if not

// HINT: In JavaScript, 1 === '1' is false, but 1 == '1' is true.
//You'll need to use the triple equals operator which is more strict because it compares data type.

// EXAMPLES:
// console.log("testing out my function for Q4: ", isEqual([1,2,3], [4,5,6]));
//    should result in the next line appearing in your console...
// false
//
// OR console.log("testing out my function for Q4: ", isEqual([1,2,3], [1,2,3]));
// true

function isEqual(a, b) {

  if(a.length !== b.length){
    return false;
  }
  for(let i = 0; i < a.length; i++){
    if (a[i] !== b[i]){
      return false
    }
    
  }
  return true
}
console.log("testing out my function for Q4: ", isEqual([1,2,3], [7,2,3]));

// QUESTION 5: Write a function that takes one Array parameter and returns the sum of all 
// the Array elements
// BONUS: use the `reduce()` method

// EXAMPLE:
// console.log("testing out my function for Q5: ", calculateArraySum([10,2,3]));
//    should result in the next line appearing in your console...
// 15

const calculateArraySum = (r) => {
  
  return r.reduce((ac, el) => ac + el, 0) 

}
console.log("testing out my function for Q5: ", calculateArraySum([1, 2, 1]));


// QUESTION 6: Write a function that takes one Array parameter
// and returns a new Array of all the even numbers
// BONUS: use the `filter()` method

// EXAMPLE:
// console.log("testing out my function for Q6: ", findEvenNumbers([10,2,3,7,6,93]));
//    should result in the next line appearing in your console...
// [10,2,6]

const findEvenNumbers = (q) => {
  return q.filter(el => el % 2 === 0)
 
}
console.log("testing out my function for Q6: ", findEvenNumbers([10,2,3,7,6,93]));


// QUESTION 7: Write a function that takes one Array parameter and returns a new Array of all the odd numbers
// BONUS: use the `filter()` method

// EXAMPLE:
// console.log("testing out my function for Q7: ", findOddNumbers([10,2,3,7,6,93]));
//    should result in the next line appearing in your console...
// [3,7,93]
const findOddNumbers = (w) => {
 return w.filter(el => el % 2 !== 0)
}
console.log("testing out my function for Q7: ", findOddNumbers([10,2,3,7,6,93]));

// QUESTION 8: Write a function that takes one Array parameter and returns 
//a new Array with the squared values of each of the numbers
// EXAMPLE: The squared value of 4 is 4^2 = 4 * 4 = 16
// BONUS: use `map()` method

// EXAMPLE:
// console.log("testing out my function for Q8: ", squareNumbers([2,5,8]));
//    should result in the next line appearing in your console...
// [4,25,64]

const squareNumbers = (s) => {
 return s.map(el => el ** 2)
}
console.log("testing out my function for Q8: ", squareNumbers([2,5,8]))

// QUESTION 9. STRETCH GOAL --- Back in the old days, the early 2000s, 
//this was a famous technical interview question. 
//Write a function definition that takes no parameters. 
//The function will loop from 1 to 15 and return an array of numbers. 
//While looping,the function will check if the current value in the loop is divisible by 3, 5, or by both.
// If the current value in the loop is divisible by 3, the function will add the string "Fizz" to an array.
// If the current value in the loop is divisible by 5, the function will add the string "Buzz" to the array. 
//If the current value in the loop is divisible by both, the function will add the value "FizzBuzz" to the array. 
//The function will return the array of values.

// EXAMPLE:
// console.log("testing out my function for Q9: ", fizzBuzz();
//    should result in the next line appearing in your console...
// [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']

const fizzBuzz = () => {
  
  let array = [];
  for(let i = 1; i <= 15; i++){
    if(i % 5 === 0 && i % 3 === 0){
      array.push('FizzBuzz');
    }
    else if(i % 3 === 0){
      array.push('Fizz');

    }
    else if(i % 5 === 0){
      array.push('Buzz');
    } 
    else{
      array.push(i)
    }
  }
  return array;
}
console.log(fizzBuzz())


function chooseDubl (arr1, arr2){
  return arr1.filter(el => el2.includes(el))
}
console.log( [6, 1, 5, 8, 0, 1, 3, 1], [1, 4, 1, 6, 4])


