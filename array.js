// let arr = []
// console.log(typeof arr)

// let arr = [1, "apple", 4, null, undefined]
// // index   0,  1,      2,   3,     4
// arr[arr.length - 1] // обращаемся к последнему элементу массива
// console.log(arr.length)
// console.log(arr[arr.length - 1])
// console.log(arr.at(-1))
// let index = 0
// while (index < arr.length) {
//   console.log(index, " ", arr[index])
//   index++
// }
// console.log(index)

// console.log("End")

// let arr1 = [1, 30, 5, 4, 3]
// let sum = 0

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] % 2 == 0) {
//     sum += arr1[i]
//   }
// }
// console.log(sum)

// Заполнить массив числами от 0 до 20 включительно,
// за исключением чисел, кратных 5 
// const arr = []
// let ac = 0
// for(let i=0; i<=20; i++){
//   if(i% 5 !== 0){
//     arr[ac] = i
//     ac++
//      }
// }

// console.log(arr);


// const arr = [1, 2, 3, 7, 8, 9]
// let newArr = [];
// let index = 0;
// // console.log(arr[arr.length - 2]);
// // console.log(arr.at(-2));

// for(let i = 0; i< arr.length; i++){
//   if(arr[i] % 2 == 0){
//     newArr[index++]= arr[i] //заглушка
//     newArr.push(arr[i])
//      }
//      if(arr[i] == 7){
//       break;
//      }
    
// }
// console.log(newArr);