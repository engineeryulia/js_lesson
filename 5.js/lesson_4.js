//===============================
//loops(for, for in, for of, while, do while)
// ----find sum

// let str = "Hello"
// let newStr = " "
// for (let i = 0; i < 7; i++) {
//   //0 1 2 3 4 5 6
//   newStr = newStr + str
//   console.log(newStr) //вывожу каждую итерацию весь цикл
// }
// console.log(newStr) // только результат
//----------------------find sum
// let sum = 0
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i
//   //console.log(sum)
// }
// console.log(sum)
//0 + 1 = 1 //i 1
//1 + 2 = 3 //i 2
//3 + 3 = 6 //i 3
//6 + 4 = 10 //i 4
//10 + 5 = 15 //i 5

//--------exponantiate
// let num = 5 //    **3
// let result = 1
// for (let i = 1; i <= 3; i++) {
//   result = result * num
// }
// console.log(result)
// //i= 1 result 1 * 5 = 5
// //i= 2 result 2 * 5 = 10
// //i= 3 result 3 * 5 = 15

// ----string
// let newS = ""
// let str = "javaScript" //letter of first index: str[0]
// //letter of last index: str[str/lenght - 1]
// for (let i = 0; i < str.length; i++) {
//   newS = newS + str[i] + ""
//   console.log(newS)
// }
// console.log(newS)

// let str = "javaScriptA"
// let newS = ""
// let a = 0
// for (let i = 0; i < str.length; i++) {
//   newS = newS + str[i] + ""
//   if (str[i] == "a") {
//     console.log("a is in array")

//     a++
//     console.log(a)
//   }
// }

// console.log("a is in array")

// ----обращение к массивам
// let lalala = ["", "", "", ""]
// console.log(lalala)

// ----обращение к массивам
//arr[index] /начинаются с 0
//arr.length; //начинаются с 0 количество элементов всего
//arr[a.length - 1] /принимает 0 и положительные индексы
//arr.at[index] - принимает отрицательные индексы

// const letters = ["a", "b", "c", "d", "e", "f"]
//                   0     1   2     3   4     5
//                                       -2   -1
// console.log(letters[0])
// // console.log(letters[letters.length - 1]) //5-1 = f обращение к послкднему элементу в массиве
// console.log(letters.at[-2])// с конца

// Palindrom
// let x = 'Palindrome'