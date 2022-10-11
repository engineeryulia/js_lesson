// let str = '8 3 -5 42 -1 0 -9 4 7 4 -4'
// let arrNew = str.split('');

// //console.log(arrNew);

// let highest = +(arrNew[0])
// let lowest = +(arrNew[0])

// for(let i = 1; i < arrNew.length; i++){

//   if(highest < +(arrNew[i])){
//     highest = +(arrNew[i])
//   }
//   if(lowest > +(arrNew[i])){
//     lowest = +(arrNew[i])
//   }
// }
// console.log(highest, lowest);


// const highAndLow = (num) => {
//   let num_arr = number.split('')
//   for (let i = 0; i < num_arr.length - 1; i++){
//     for(let j = i + 1; j <= num_arr.length; j++){
//       if(+num_arr[i] > num_arr[j]){
//         let temp = num_arr[i]
//         num_arr[i] = num_arr[j]
//         num_arr[j] = temp

//       }

//     }
//   }
//   console.log(num_arr);
//   return num_arr[num_arr.length - 1] + '' + num_arr[0]
// }



//=============================================================
// function highAndLow(numbers) {
//   let min = null;
//   let max = null;
//   let current = '';
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] != ' ') {
//       current += numbers[i];
//     } else {
//       if (min == null && max == null) {
//         min = +current;
//         max = +current;
//         current = '';
//       } else if (+current < min) {
//         min = +current;

//         current = '';
//       } else if (+current > max) {
//         max = +current;
//         current = '';
//       }
//     }
//   }
//   return `${max} ${min}`;
// }
// res = highAndLow('168 36 -52 42 -1 0 0 -9 4 7 4 -4');
// console.log(res);