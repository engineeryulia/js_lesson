// function code(arr){
//   return arr.length;
// }
// let arr
// //console.log([1, 2, 3]);
// console.log(code(arr));


// const code = (arr) =>{
// return arr ? arr.length : -1;
// }
// console.log([1, 3]);
//1. arr == null
//2. !arr
//3. Array.isArray(arr)

// 0, null, undefined, Nan, "" -> false


//--bubble sorting---------sort of array
// const arr = [10, 2, 4, 67, 97, 139, 3, 7]
// //     10, 2
// //     2, 10
// //     2, 4
// //       ...
// //     [2, 10, 4, 67, 97, 139, 3, 7]
// //     10, 4
// //     4, 10
// //       ...
// //     4, 3
// //     3, 4
// //     [2, 10, 4, 67, 97, 139, 3, 7]
// for(let i= 0; i < arr.length -1; i++){
//   for(let j = i + 1; j < arr.length; j++){
//     if(arr[i] > arr[j]){
//       let temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = arr[temp]
//     }
//   }
// }
// console.log(arr);
// console.log(arr[arr.length-1]); //arr.at(-1)
// console.log(arr[arr.length-2]); //arr.at(-2)

//-----------------
//1
//12
//123
//1234
//12345

// let n = 5;
// let str = '';

// for(let i = 1; i <=n; i++){
//   for(let j = 1; j <= i; j++){
//     str = str + j
//   }
//   str = str = '\n'
// }
// console.log(str);