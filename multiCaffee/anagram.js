/*
PROBLEM:- write a function that checks if two provided strings are anagrams of each other; 
letter casing shouldn’t matter. 
Also, consider only characters, not spaces or punctuation.
 For Example: anagram('fried','fired')// true; anagram('ginly', 'lying') //true; anagram('listen', 'bye')  // false; 
 */
// function isAnagram(word1, word2) {
//   let newWord1 = word1.split('').sort().join('');
//   let newWord2 = word2.split('').sort().join('');
//   return newWord1 == newWord2 ? true: false

// }
// console.log(isAnagram('fried','fired'));
// console.log(isAnagram('ginly', 'lying'));
// console.log(isAnagram('listen', 'bye'));
 

// function isAnagram(word1, word2) {
//    return word1.split('').sort().join('') === word2.split('').sort().join('');
// }
//   console.log(isAnagram('fried','fired'));
//   console.log(isAnagram('ginly', 'lying'));
//   console.log(isAnagram('listen', 'bye'))
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  // let string = 'aabbbcdddddaag' //=> 'a2b3c1d5a2
  // let newString = '';
  // let count = 1;
  // let current = string[0];
  
  // for (let i = 1; i <= string.length; i++){
  // if (string[i] == current){
  // count++
  // } else {
  // newString += current + count;
  // current = string[i]
  // count = 1
  // }
  // }
  // console.log(newString); 
  
  