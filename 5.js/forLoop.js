// let str = "Welcome to our class"
// let count = 0
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "o") {
//     count++
//   } else return "0"
// }
// console.log(count)

/*

Имеется зашифрованное предложение 
“Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор.
 */
// let str = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr"
// const youAreTheBestQA = (str) => {
//   let res = ""
//   for (let i = 0; i < str.length; i++) {
//     if ((str[i] !== "b" && str[i] !== "r") || str[i] === str[i + 1]) {
//       res += str[i]
//     }
//   }
//   return res
// }
// console.log(youAreTheBestQA(str))

/*У вас есть массив со скобками, предположим 
[ '(‘, ‘)’, ‘(‘, ‘)’, ‘)’] количество элементов и последовательность может быть разной.
Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
*/
// let arr = ["(", ")", "(", ")", ")", "("]

// const openClosePar = (arr) => {
//   let openP = 0
//   let closeP = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "(") {
//       openP++
//     } else {
//       closeP++
//     }
//   }
//   return closeP == openP ? true : false
// }
// console.log(openClosePar(arr))

  // const number = [34, 56, 8, 90, 44]
  // let txt ="";
  // for(let x in number){  //используем переменную x 
  //                       //чтобы эта переменная обращалась к массиву numbers
  //   txt += number[x]+ ',';
  //   console.log(txt);
  // }


  //nodeList for (let x of ..... )