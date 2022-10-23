// aabbaa - true
// aabaB - false
// aZaaZa - true

// function palindrome(word){
//   word = word.toLowerCase();
//   for (let i = 0; i < word.length / 2; i++){
//     if (word[i] !== word[word.length - i - 1]){
//       return false;
//     }
//   }
//   return true
// }
// console.log(palindrome('aabbaa'))

function palindrome(word){
  word = word.toLowerCase();
  console.log(word.split(''));
    return word === word.split('').reverse().join('')

}
console.log(palindrome('aabbaa'))












// let x = 'Palindrome'
// let str = ''
// for(let i=x.length-1; i>=0; i--){ //i=i-1
//   str = str + x[i]   //str += x[i]
//   console.log(str);
// }

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let str = ''
// for(let i=x.length-1; i>=0; i--){ //i=i-1
//   str = str + x[i]   //str += x[i]
//   console.log(str);
// }
// console.log(typeof str);
