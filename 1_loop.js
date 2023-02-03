// QUESTION 1. Write a standard function definition that takes 1 parameter 
//(of data type number) and prints out the string "Happy Birthday!"
// to the console the same number of times as the parameter. 

// EXAMPLE:
// console.log("testing out my function for Q1: ", happyBirthday(3));
//    should give you the following output in your console...
// Happy Birthday!
// Happy Birthday!
// Happy Birthday!

function happyBirthday(n) {
  let i = 0;
  while (i < n){
    console.log('Happy Birthday!');
    i++;
  };

};
happyBirthday(3)


// QUESTION 2 (new). Write a standard function definition that takes 1 parameter.
// The parameter is a number and the function should return the sum of that number and all
// of the numbers greater than 0 below it. Example - if it was 3, it should add 3, to 1 + 2 
//because those are all of the numbers between 0 and 3.  Therefore it should return 6.

// EXAMPLE: 
// console.log("testing out my function for Q2: ", sum(4));
//    should give you the following output in your console...
// 10

function sum(num) {
  count = 0; 
  for(let i = 1; i <= num; i++){
     count += i
    console.log(i, count)
  }
  return count
}
console.log(sum(4))

//QUESTION 3 (new). Write a standard function definition that will remove vowels from a string 
//using a loop that takes a parameter of type string and removes all of the vowels.
// Test it against the variable myString which is set to "elephant".



// EXAMPLE:
// console.log("testing out my function for Q3: ", removeVowels(myString));
// should give you the following output in your console...
// lphnt
const myString = "elephant"
function removeVowels(myString) {
  let word = '';
  for(let i = 0; i < myString.length; i++){
  if( myString[i] === 'a' ||  myString[i] === 'e'||
   myString[i] === 'o' ||  myString[i] === 'u'|| myString[i] === 'i'){
      continue ;
    }
  word += myString[i] 
   
  }
  return word;
}
console.log("testing out my function for Q3: ", removeVowels(myString));

// QUESTION 4 (new). Write a function definition that takes 1 parameter. 
//The parameter is a number and the function should return the number of odd numbers
// between 0 and that number, including the number. 
//(Remember the modulo operator)

// EXAMPLE:
// console.log("testing out my function for Q4: ", oddChecker(15));
// should give you the following output in your console...
// 8

const oddChecker = (n) => {
  let count = 0;
for(let i = 1; i <= n; i++){
  if(i % 2 !== 0){
   count++
    
  }
  
}
return count;
}
console.log("testing out my function for Q4: ", oddChecker(5));

// QUESTION 5. Write a function definition that takes 1 parameter. 
//The parameter is a string and the function should return the number of vowels in the string. 

// EXAMPLE:
// console.log("testing out my function for Q5: ", vowelsChecker('I love to code.'));
// should give you the following output in your console...
// 6

const vowelsChecker = (s) => {
  let count = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i] === 'a'|| s[i] === 'e'|| s[i] === 'o'|| s[i] === 'u'|| s[i] === 'i'){
      count++;
    }
    }
  return count;
  }

  console.log(vowelsChecker('soooeaoooo'))




